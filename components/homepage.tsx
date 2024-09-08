'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, FlaskConical, PenTool, } from "lucide-react"
import Link from "next/link"

export function Homepage() {
  const courses = [
    { title: "ITIL-4", icon: PenTool, description: " ", href: "/itil-test" },
    { title: "Science", icon: FlaskConical, description: "Physics, Chemistry, Biology", href: "/coming-soon" },
    { title: "Computer Science", icon: Code, description: "Programming, Algorithms", href: "/coming-soon" },
    { title: "Literature", icon: BookOpen, description: "English, World Literature, Poetry", href: "/coming-soon" },
  ]

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master Your Skills with Online Tests
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enhance your knowledge and track your progress with our comprehensive online tests across various subjects.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#get-started">Get Started</Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Explore Our Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <course.icon className="w-8 h-8 mb-2" />
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={course.href}>Take Test</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}