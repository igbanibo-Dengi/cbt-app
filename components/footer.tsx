import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full py-6 bg-background dark:bg-gray-800">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">About Us</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Support</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Legal</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Newsletter</h4>
                        <form className="space-y-2">
                            <Input type="email" placeholder="Enter your email" />
                            <Button type="submit" className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2023 TestMaster. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer