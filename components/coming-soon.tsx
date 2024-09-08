'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bell, Clock, Mail } from "lucide-react"
import { useToast } from '@/hooks/use-toast'
// import { useToast } from "@/components/ui/use-toast"

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const { toast } = useToast()

  useEffect(() => {
    const launchDate = new Date('2024-10-01T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      })

      if (difference < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    toast({
      title: "Notification Set",
      description: "We'll notify you when our new courses are available!",
    })
    // setEmail('')
  }

  return (
    <div className="min-h-screen dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2">Coming Soon!</CardTitle>
          <CardDescription className="text-xl">
            Our new courses will be available soon. Stay tuned for updates!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-4 gap-4 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-primary/10 rounded-lg p-3">
                <div className="text-3xl font-bold text-primary">{value}</div>
                <div className="text-xs uppercase text-muted-foreground">{unit}</div>
              </div>
            ))}
          </div>

          <Separator />

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">Get Notified</h3>
            <p className="text-center text-muted-foreground">
              Be the first to know when our new courses are available!
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit">
                <Mail className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            Launching September 1, 2023
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Bell className="w-4 h-4 mr-2" />
            Stay tuned for updates
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}