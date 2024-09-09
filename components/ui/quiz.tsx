'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, Clock } from "lucide-react"
import { initialQuestions } from '../quizData'
// Assuming this contains all 200+ questions
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from '@radix-ui/react-dialog'


type Question = {
    questionText: string
    options: string[]
    correctAnswer: string
}

export default function Quiz({ title }: { title?: string }) {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<{ [key: number]: string | null }>({})
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [showScore, setShowScore] = useState<boolean>(false)
    const [timeRemaining, setTimeRemaining] = useState(60 * 60) // 60 minutes in seconds

    const shuffleArray = (array: Question[]) => {
        const shuffled = [...array]
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
    }

    useEffect(() => {
        const shuffledQuestions = shuffleArray(initialQuestions).slice(0, 40)
        setQuestions(shuffledQuestions)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    setShowScore(true)
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleOptionClick = (option: string) => {
        const isCorrect = option === questions[currentQuestionIndex].correctAnswer

        setAnswers((prev) => ({
            ...prev,
            [currentQuestionIndex]: option,
        }))

        if (isCorrect) {
            setCorrectAnswers((prev) => prev + 1)
        }
    }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            setShowScore(true)
        }
    }

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleSubmit = () => {
        setShowScore(true)
    }

    const resetQuiz = () => {
        setCurrentQuestionIndex(0)
        setAnswers({})
        setCorrectAnswers(0)
        setShowScore(false)
        setTimeRemaining(60 * 60)

        const shuffledQuestions = shuffleArray(initialQuestions).slice(0, 40)
        setQuestions(shuffledQuestions)
    }

    const calculateScorePercentage = () => {
        return (correctAnswers / questions.length) * 100
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    if (showScore) {
        return (
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>Your test results</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-4xl font-bold mb-4">{calculateScorePercentage().toFixed(2)}%</p>
                    <p className="text-lg">You got {correctAnswers} out of {questions.length} questions correct.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={resetQuiz}>Retake Quiz</Button>
                    <Button variant={'destructive'} asChild>
                        <Link href="/">Exit to Home</Link>
                    </Button>
                </CardFooter>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="flex justify-between items-center">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Time remaining: {formatTime(timeRemaining)}
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Progress value={(currentQuestionIndex + 1) / questions.length * 100} className="mb-4" />
                <h2 className="text-lg font-semibold mb-4">{questions[currentQuestionIndex]?.questionText}</h2>
                <RadioGroup
                    onValueChange={(value) => handleOptionClick(value)}
                    value={answers[currentQuestionIndex] || ''}
                >
                    {questions[currentQuestionIndex]?.options.map((option, index) => (
                        <div key={option} className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value={option} id={`option-${index}`} disabled={answers[currentQuestionIndex] !== undefined} className='size-4' />
                            <Label htmlFor={`option-${index}`} className="flex-grow p-2 rounded-md hover:bg-gray-100">
                                {option}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
                {answers[currentQuestionIndex] !== undefined && (
                    <div className="mt-4 flex items-center">
                        {answers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer ? (
                            <>
                                <CheckCircle2 className="text-green-500 mr-2" />
                                <p className="text-green-600 font-medium">Correct!</p>
                            </>
                        ) : (
                            <>
                                <AlertCircle className="text-red-500 mr-2" />
                                <p className="text-red-600 font-medium">
                                    Incorrect. The correct answer is{' '}
                                    <span className="font-bold">{questions[currentQuestionIndex].correctAnswer}</span>.
                                </p>
                            </>
                        )}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row gap-4 md:justify-between">
                <div className="flex space-x-2 w-full md:w-fit justify-between md:justify-start">
                    <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0} variant="outline">
                        Previous
                    </Button>
                    <Button
                        onClick={handleNext}
                        disabled={answers[currentQuestionIndex] === undefined}
                    >
                        {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
                <div className="flex space-x-2 w-full md:w-fit justify-between md:justify-start">
                    <Dialog>
                        <DialogTrigger><Button>Submit Test</Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription className='text-xl py-4'>
                                    This action cannot be undone. And you will not be able to access the test again.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <div className='flex items-center justify-between w-full'>
                                    <DialogClose asChild>
                                        <Button type="button" variant={'outline'}>
                                            Close
                                        </Button>
                                    </DialogClose>
                                    <Button onClick={handleSubmit} variant="default">Submit Test</Button>
                                </div>

                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger><Button variant={'destructive'}>Exit Test</Button></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription className='text-xl py-4'>
                                    This action cannot be undone. All your current pogress will be lost.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <div className='flex items-center justify-between w-full'>
                                    <DialogClose asChild>
                                        <Button type="button">
                                            Close
                                        </Button>
                                    </DialogClose>
                                    <Button variant={'destructive'} >
                                        <Link href={"/"}>Exit Test</Link>
                                    </Button>
                                </div>

                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardFooter>
        </Card>
    )
}