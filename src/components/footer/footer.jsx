'use client'

import React from 'react'
import { useTheme } from "next-themes"
import Link from 'next/link'

const Footer = () => {
    const { systemTheme } = useTheme()
    const themes = {
        "dark": '/favicon-white.svg',
        "light": '/favicon-black.svg',
    }
    return (
        <footer className={`${systemTheme == "dark" ? 'bg-zinc-950' : 'bg-white'} rounded-lg mt-6 shadow w-full pt-6`}>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        href="/"
                        target='_blank'
                        className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={themes[systemTheme]} className={`footer-logo ${systemTheme}`} alt="cps forum logo" />
                    </Link>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link
                                href="suporte/sobre"
                                className="hover:underline me-4 md:me-6">Sobre</Link>
                        </li>
                        <li>
                            <Link
                                href="suporte/politica-de-privacidade"
                                className="hover:underline me-4 md:me-6">Política de Privacidade</Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.github.com/cpsforum/cpsforum"
                                target='_blank'
                                className="hover:underline me-4 md:me-6">Documentação</Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                target='_blank'
                                className="hover:underline">Contato</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Forum CPS</a>. Todos os direitos Reservados. </span>
            </div>
        </footer>
    );
}

export default Footer;