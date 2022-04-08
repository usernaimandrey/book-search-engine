import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectorsBooks,
    setIndex,
    getFetchData,
} from '../../slices/booksReducer.js';
import './Cards.css';
import Card from '../Card/Card.jsx';

const Cards = () => {
    const [stateButton, setState] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(selectorsBooks.selectAll);
    const { totalItems, paramsReq } = useSelector((state) => state.books);
    const diff = totalItems - items.length;
    const step = diff > 30 ? 30 : diff;
    const hendler = async (e) => {
        e.preventDefault();
        if (!step) {
            setState(true);
            return;
        }
        dispatch(setIndex({ step }));
        await dispatch(getFetchData(paramsReq));
    };
    return (
        <>
            {totalItems && <h3>{`Найденных книг: ${totalItems}`}</h3>}
            <div className="container">
                {items?.map(
                    ({
                        id,
                        volumeInfo: { title, authors, imageLinks, categories },
                    }) => (
                        <Link to={`/${id}`} key={id}>
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
