import React from 'react';
import { HumanSciences, Languages, NatureSciences, SocialScienceAndMath } from '../data/books';
import './bookRow.css'

const BookRow = ({slug}) => {

    const [expandedItem, setExpandedItem] = React.useState(null);

    const handleViewMore = (index) => {
        setExpandedItem(index);
    }

    const handleViewLess = () => {
        setExpandedItem(null);
    }

    
    const bookdata = {
        'ciencias-humanas': HumanSciences,
        'linguagens': Languages,
        'ciencias-da-natureza': NatureSciences,
        'ciencias-sociais-e-matematica': SocialScienceAndMath
    }

    const books = bookdata[slug];
    
    return (  
        <>
            <div className="p-2 grid justify-around grid-rows-4 grid-flow-col gap-4">
                {books.map((book, index) => (
                    <div className="book w-full max-w-sm border rounded-lg shadow bg-secondary" key={index}>
                        <div className="flex items-center justify-center">
                            <a href={book.src} target="_blank">
                                <img className="p-8 rounded-t-lg" src={book.cover} />
                            </a>

                        </div>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-foreground">{book.title}</h5>
                                <h6 className="text-muted-foreground"> {book.category}</h6>
                            </a>
                            <div className="flex flex-col items-left mt-2.5 mb-5 text-secondary-foreground">
                                <p className="leading-relaxed">
                                    {expandedItem === index ? book.desc : book.desc.slice(0, 150) + '...'} &nbsp;
                                    <button id={`toggle-btn-${index}`} className="text-primary focus:outline-none" onClick={() => expandedItem === index ? handleViewLess() : handleViewMore(index)}>
                                    {expandedItem === index ? 'Ler Menos' : 'Ler mais'}
                                </button>
                                </p>
                                {book.desc.length > 150 && (
                                    <span id={`more-text-${index}`} className={expandedItem === index ? '' : 'hidden'}>
                                        {book.desc.slice(150, 0)}
                                    </span>
                                )}                                
                            </div>
                            <div className="flex flex-col items-left mt-2.5 mb-5 text-gray-600">
                                {/* <p>Autor: {book.author}</p>
                                <p>Ano: {book.release}</p> */}
                            </div>
                            <div className="flex items-center justify-between">
                                <a href={book.src} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Ver Mais</a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}
 
export default BookRow;