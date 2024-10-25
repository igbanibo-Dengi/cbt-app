'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Menu } from "lucide-react"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { initialQuestions } from './quizData2-new'

type Question = {
    questionText: string
    options: string[]
    correctAnswer: string
}

export default function Quiz({ title = "Quiz" }: { title?: string }) {
    const [questions, setQuestions] = useState<Question[]>(initialQuestions)
    const [currentPage, setCurrentPage] = useState(0)
    const [answers, setAnswers] = useState<{ [key: number]: string | null }>({})
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const questionsPerPage = 5
    const totalPages = Math.ceil(questions.length / questionsPerPage)

    const getQuestionsForCurrentPage = () => {
        const start = currentPage * questionsPerPage
        const end = start + questionsPerPage
        return questions.slice(start, end)
    }

    const handleOptionClick = (option: string, questionIndex: number) => {
        const isCorrect = option === questions[questionIndex].correctAnswer

        setAnswers((prev) => ({
            ...prev,
            [questionIndex]: option,
        }))

        if (isCorrect) {
            // Handle correct feedback (can display any message or visual feedback here)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // This will animate the scroll
        });
    }


    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1)
            scrollToTop();
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            scrollToTop();
        }
    }

    const handlePageSelect = (pageIndex: number) => {
        setCurrentPage(pageIndex)
        setIsDrawerOpen(false)
        scrollToTop();
    }

    const PaginationContent = () => (
        <div className="flex flex-col justify-between bg-white p-4 rounded-md h-fit">
            <ScrollArea className="h-[70vh]">
                <div className="grid gap-2 grid-cols-5 sm:grid-cols-8">
                    {[...Array(totalPages)].map((_, pageIndex) => (
                        <Button
                            key={pageIndex}
                            onClick={() => handlePageSelect(pageIndex)}
                            variant={currentPage === pageIndex ? "default" : "outline"}
                        >
                            {pageIndex + 1}
                        </Button>
                    ))}
                </div>
            </ScrollArea>
            <div className="justify-between mt-4 p-5 w-full hidden md:flex">
                <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    Previous
                </Button>
                <Button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                    Next
                </Button>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col lg:flex-row gap-4 p-4 md:h-screen">
            <Card className="w-full lg:w-2/3 flex flex-col">
                <CardHeader>
                    <div className='flex flex-col space-y-2'>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>
                            Page {currentPage + 1} of {totalPages}
                        </CardDescription>
                    </div>
                    <div className="flex justify-between mt-4 py-4 md:hidden">
                        <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
                            Previous
                        </Button>
                        <Button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                            Next
                        </Button>
                    </div>
                </CardHeader>
                <ScrollArea className="flex-grow">
                    <CardContent>
                        {getQuestionsForCurrentPage().map((question, index) => {
                            const questionIndex = currentPage * questionsPerPage + index
                            return (
                                <div key={question.questionText} className="mb-6">
                                    <h2 className="text-lg font-semibold mb-4">{question.questionText}</h2>
                                    <RadioGroup
                                        onValueChange={(value) => handleOptionClick(value, questionIndex)}
                                        value={answers[questionIndex] || ''}
                                    >
                                        {question.options.map((option, idx) => (
                                            <div key={option} className="flex items-center space-x-2 mb-2">
                                                <RadioGroupItem value={option} id={`option-${questionIndex}-${idx}`} />
                                                <Label htmlFor={`option-${questionIndex}-${idx}`} className="flex-grow p-2 rounded-md hover:bg-gray-100">
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    {answers[questionIndex] !== undefined && (
                                        <div className="mt-4 flex items-center">
                                            {answers[questionIndex] === question.correctAnswer ? (
                                                <>
                                                    <CheckCircle2 className="text-green-500 mr-2" />
                                                    <p className="text-green-600 font-medium">Correct!</p>
                                                </>
                                            ) : (
                                                <>
                                                    <AlertCircle className="text-red-500 mr-2" />
                                                    <p className="text-red-600 font-medium">
                                                        Incorrect. The correct answer is{' '}
                                                        <span className="font-bold">{question.correctAnswer}</span>.
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </CardContent>
                </ScrollArea>
            </Card>
            <div className="w-full lg:w-1/3">
                <div className="hidden lg:block sticky top-4">
                    <PaginationContent />
                </div>
                <div className="flex justify-between py-4 md:hidden">
                    <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
                        Previous
                    </Button>
                    <Button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                        Next
                    </Button>
                </div>
                <div className="lg:hidden">
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <DrawerTrigger asChild>
                            <Button variant="outline" className="w-full mb-4">
                                <Menu className="mr-2 h-4 w-4" /> Open Navigation
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="p-4">
                                <PaginationContent />
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}