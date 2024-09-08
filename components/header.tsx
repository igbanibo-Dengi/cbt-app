'use client'

import { GraduationCap, Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <div className="container mx-auto flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <GraduationCap className="h-6 w-6" />
                        <span className="font-bold sm:inline-block">TestMaster</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Button
                                key={item.href}
                                variant="link"
                                disabled
                                asChild
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        ))}
                    </nav>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="flex items-center space-x-2 mb-4"
                                onClick={() => document.body.classList.remove('overflow-hidden')}
                            >
                                <GraduationCap className="h-6 w-6" />
                                <span className="font-bold">TestMaster</span>
                            </Link>
                            {navItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant="ghost"
                                    disabled
                                    asChild
                                    className="justify-start"
                                    onClick={() => document.body.classList.remove('overflow-hidden')}
                                >
                                    <Link href={item.href}>{item.label}</Link>
                                </Button>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <Link href="/"><span className="font-bold md:hidden">TestMaster</span></Link>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <form onSubmit={(e) => e.preventDefault()} className={cn("hidden md:block", isSearchOpen && "flex")}>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                    </Button>
                    <Button disabled className="hidden sm:flex">Sign In</Button>
                </div>
            </div>
            {isSearchOpen && (
                <div className="border-t md:hidden">
                    <form onSubmit={(e) => e.preventDefault()} className="container py-4">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="pl-8 w-full"
                            />
                        </div>
                    </form>
                </div>
            )}
        </header>
    )
}