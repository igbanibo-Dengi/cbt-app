'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { initialQuestions } from '../quizData' // Assuming this contains all 200+ questions

type Question = {
  questionText: string
  options: string[]
  correctAnswer: string
}

export function ComponentsUiQuiz() {
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
      <Card>
        <CardHeader>
          <CardTitle>Quiz Completed!</CardTitle>
          <CardDescription>Here's how you did:</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-bold mb-4">{calculateScorePercentage().toFixed(2)}%</p>
          <p className="text-lg">You got {correctAnswers} out of {questions.length} questions correct.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={resetQuiz} className="w-full">Reset Quiz</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
        <CardDescription>Time remaining: {formatTime(timeRemaining)}</CardDescription>
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
              <RadioGroupItem value={option} id={`option-${index}`} disabled={answers[currentQuestionIndex] !== undefined} />
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
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0} variant="outline">
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={answers[currentQuestionIndex] === undefined}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  )
}