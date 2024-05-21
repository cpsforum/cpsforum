'use client'

import React from 'react'
import { useTheme } from "next-themes"

const Footer = () => {
    const { systemTheme } = useTheme()
    const themes = {
        "dark": '/logo-white.svg',
        "light": '/logo2.svg',
    }
    return (
        <>


            <footer class={`${systemTheme == "dark" ? 'bg-zinc-950' : 'bg-white'} rounded-lg shadow m-4 w-full`}>
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="/" class="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={themes[systemTheme]} class="footer-logo" alt="Flowbite Logo" />
                        </a>
                        <ul class="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Forum CPS</a>. Todos os direitos Reservados. </span>
                </div>
            </footer>


        </>
    );
}

export default Footer;