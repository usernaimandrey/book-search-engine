import React, { useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectorsBooks } from '../slices/booksReducer';
import './BookPage.css';

const BookPage = () => {
    const pageRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const books = useSelector(selectorsBooks.selectAll);
    if (books.length === 0) {
        return <Navigate to="/" />;
    }
    const book = books.find((el) => el.id === id);
    const { volumeInfo } = book;
    return (
        <div ref={pageRef} className="bookDescription">
            <div className="imgBookPageContainer">
                <Link to="/" className="back">
                    <p>На главную</p>
                </Link>
                <img
                    className="imgBookPage"
                    src={volumeInfo?.imageLinks?.thumbnail}
                    alt="Обложка книги"
                />
            </div>
            <div className="containerTextBook">
                <div className="titleBook">
                    <h3 className="headTitle">{volumeInfo.title}</h3>
                </div>
                <div className="categoriesBook">
                    <p>{volumeInfo?.categories}</p>
                </div>
                <div className="authorsBook">
                    <p>{volumeInfo?.authors?.join(', ')}</p>
                </div>
                <div className="description">
                    <p>{volumeInfo?.description}</p>
                </div>
                <div className="linkContainer">
                    <a
                        className="link"
                        href={volumeInfo?.previewLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Посмотреть на GOOGLE BOOKS
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookPage;
