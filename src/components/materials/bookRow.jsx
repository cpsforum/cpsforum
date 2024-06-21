import React from 'react';
import { HumanSciences, Languages, NatureSciences, SocialScienceAndMath, LiteraryWorks } from '@/components/data/books';
import './bookRow.css';

const BookRow = ({ slug }) => {
    const [expandedItem, setExpandedItem] = React.useState(null);

    const handleViewMore = (index) => {
        setExpandedItem(index);
    }

    const handleViewLess = () => {
        setExpandedItem(null);
    }

    const allBooks = [
        ...SocialScienceAndMath,
        ...Languages,
        ...HumanSciences,
        ...NatureSciences,
        ...LiteraryWorks,
    ].sort();

    const bookdata = {
        'ciencias-humanas': HumanSciences,
        'linguagens': Languages,
        'ciencias-da-natureza': NatureSciences,
        'ciencias-sociais-e-matematica': SocialScienceAndMath,
        'obras-literarias': LiteraryWorks,
        'home': allBooks,
    }

    const books = bookdata[slug];

    const renderBook = (book, index) => {
        return (
            <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div className="book max-w-sm border rounded-lg shadow bg-secondary">
                    <div className="flex items-center justify-center">
                        <a href={book.src} target="_blank" rel="noopener noreferrer">
                            <img className="p-8 rounded-t-lg" src={book.cover} alt={book.title} />
                        </a>
                    </div>
                    <div className="card-body px-3 pb-3">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-foreground">{book.title}</h5>
                            <h6 className="text-muted-foreground">{book.category}</h6>
                        </a>
                        <div className="text flex flex-col items-left mt-2.5 mb-5 text-secondary-foreground">
                            <p className="leading-relaxed">
                                {
                                    book.desc.length > 200 ?
                                        (
                                            expandedItem === index ? book.desc : book.desc.slice(0, 200) + '...'
                                        ) :
                                        (
                                            book.desc
                                        )
                                } &nbsp;
                                {
                                    book.desc.length > 200 &&
                                    <button id={`toggle-btn-${index}`} className="toggle text-primary focus:outline-none" onClick={() => expandedItem === index ? handleViewLess() : handleViewMore(index)}>
                                        {expandedItem === index ? 'Ler Menos' : 'Ler mais'}
                                    </button>
                                }
                            </p>

                            {book.desc.length > 200 && (
                                <span id={`more-text-${index}`} className={expandedItem === index ? '' : 'hidden'}>
                                    {book.desc.slice(200, 0)}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <a target='_blank' href={book.src} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Ver Mais</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container my-6 mx-auto px-3 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {books.map((book, index) => {
                    const columnIndex = Math.floor(index / 3);
                    if (index % 3 === 0) {
                        return (
                            <React.Fragment key={index}>
                                {renderBook(book, index)}
                            </React.Fragment>
                        );
                    } else {
                        return renderBook(book, index);
                    }
                })}
            </div>
        </div>
    );
}

export default BookRow;
