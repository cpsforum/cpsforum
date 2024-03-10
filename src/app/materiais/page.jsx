'use client';

import { HumanSciences } from "@/components/data/books";
import React from 'react';

export default function Home() {
    const books = HumanSciences;
    const [expandedItem, setExpandedItem] = React.useState(null);

    const handleViewMore = (index) => {
        setExpandedItem(index);
    }

    const handleViewLess = () => {
        setExpandedItem(null);
    }

   
    return (
        <>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
                {books.map((book, index) => (
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                        <div className="flex items-center justify-center">
                            <a href={book.src} target="_blank">
                                <img class="p-8 rounded-t-lg" src={book.cover} />
                            </a>

                        </div>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                                <h6 className="text-gray-900"> {book.category}</h6>
                            </a>
                            <div class="flex flex-col items-left mt-2.5 mb-5 text-gray-600">
                            <p className="leading-relaxed">
                                {expandedItem === index ? book.desc : book.desc.slice(0, 150)+'...'}
                            </p>
                            {book.desc.length > 150 && (
                                <span id={`more-text-${index}`} className={expandedItem === index ? '' : 'hidden'}>
                                    {book.desc.slice(150)}
                                </span>
                            )}
                            <button id={`toggle-btn-${index}`} className="mt-4 text-blue-500 focus:outline-none" onClick={() => expandedItem === index ? handleViewLess() : handleViewMore(index)}>
                                {expandedItem === index ? 'Hide' : 'Ler mais'}
                            </button>
                        </div>
                            <div class="flex flex-col items-left mt-2.5 mb-5 text-gray-600">
                                {/* <p>Autor: {book.author}</p>
                                <p>Ano: {book.release}</p> */}
                            </div>
                            <div class="flex items-center justify-between">
                                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Ver Mais</a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}