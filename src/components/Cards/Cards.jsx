import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
    selectorsBooks,
    setIndex,
    loadBooks,
    setCoordinates,
} from '../../slices/booksReducer.js';
import './Cards.css';
import Card from '../Card/Card.jsx';
import Spinner from '../../spinner/Spinner.jsx';

const Cards = () => {
    const [stateButton, setState] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(selectorsBooks.selectAll);
    const { totalItems, paramsReq, coordinates, loading } = useSelector(
        (state) => state.books
    );
    useEffect(() => {
        window.scrollTo(coordinates.x, coordinates.y);
    }, [coordinates]);
    const diff = totalItems - items.length;
    const step = diff > 30 ? 30 : diff;
    const hendler = async (e) => {
        e.preventDefault();
        if (!step) {
            setState(true);
            toast.info('В очереди нет книг!');
            return;
        }
        dispatch(setIndex({ step }));
        await dispatch(loadBooks(paramsReq));
    };
    const scroll = () => {
        const y = window.pageYOffset;
        const x = window.pageXOffset;
        dispatch(setCoordinates({ x, y }));
    };
    return (
        <>
            {loading === 'loading' ? <Spinner /> : null}
            {totalItems && (
                <h3 className="countBooks">{`Найденных книг: ${totalItems}`}</h3>
            )}
            <div className="container">
                {items?.map(
                    ({
                        id,
                        volumeInfo: { title, authors, imageLinks, categories },
                    }) => (
                        <Link to={`/${id}`} key={id} onClick={scroll}>
                            <Card
                                data={{
                                    authors,
                                    title,
                                    imageLinks,
                                    categories,
                                }}
                            />
                        </Link>
                    )
                )}
            </div>
            {items.length && (
                <button
                    className="btn"
                    onClick={hendler}
                    disabled={stateButton}
                >
                    Загрузить еще
                </button>
            )}
        </>
    );
};

export default Cards;
