'use client'

import { useState } from 'react';

type Question = {
    questionText: string;
    options: string[];
    correctAnswer: string;
};

const Quiz = () => {
    const questions: Question[] = [
        {
            questionText: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correctAnswer: 'Paris',
        },
        {
            questionText: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
            correctAnswer: 'Mars',
        },
        {
            questionText: 'What is the largest ocean on Earth?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            correctAnswer: 'Pacific Ocean',
        },
        {
            questionText: 'Who wrote "Hamlet"?',
            options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
            correctAnswer: 'William Shakespeare',
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string | null }>({});
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showScore, setShowScore] = useState<boolean>(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionClick = (option: string) => {
        const isCorrect = option === currentQuestion.correctAnswer;

        // Store the selected answer and update correctAnswers if applicable
        setAnswers(prev => ({
            ...prev,
            [currentQuestionIndex]: option,
        }));

        if (isCorrect) {
            setCorrectAnswers(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowScore(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setAnswers({});
        setCorrectAnswers(0);
        setShowScore(false);
    };

    const calculateScorePercentage = () => {
        return (correctAnswers / questions.length) * 100;
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            {showScore ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
                    <p className="text-xl mb-4">Your score: {calculateScorePercentage().toFixed(2)}%</p>
                    <button
                        onClick={resetQuiz}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Reset Quiz
                    </button>
                </div>
            ) : (
                <>
                    <h1 className="text-2xl font-bold mb-4">{currentQuestion.questionText}</h1>
                    <ul>
                        {currentQuestion.options.map((option) => (
                            <li key={option} className="mb-2">
                                <button
                                    onClick={() => handleOptionClick(option)}
                                    disabled={answers[currentQuestionIndex] !== undefined}
                                    className={`w-full p-3 text-left border rounded-lg
                    ${answers[currentQuestionIndex] === option
                                            ? option === currentQuestion.correctAnswer
                                                ? 'bg-green-200'
                                                : 'bg-red-200'
                                            : ''
                                        }
                    ${answers[currentQuestionIndex] === undefined ? 'hover:bg-gray-100' : ''}
                  `}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {answers[currentQuestionIndex] !== undefined && (
                        <div className="mt-4">
                            {answers[currentQuestionIndex] === currentQuestion.correctAnswer ? (
                                <p className="text-green-600 font-medium">Correct! 🎉</p>
                            ) : (
                                <p className="text-red-600 font-medium">
                                    Incorrect. The correct answer is{' '}
                                    <span className="font-bold">{currentQuestion.correctAnswer}</span>.
                                </p>
                            )}
                        </div>
                    )}
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            disabled={answers[currentQuestionIndex] === undefined}
                        >
                            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
