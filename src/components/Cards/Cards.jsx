import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectorsBooks,
    setIndex,
    getFetchData,
} from '../../slices/booksReducer.jsx';
import './Cards.css';
import Card from '../Card/Card.jsx';

const Cards = () => {
    const [stateButton, setState] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(selectorsBooks.selectAll);
    const { totalItems, paramsReq } = useSelector((state) => state.books);
    console.log(paramsReq.startIndex, items);
    const diff = totalItems - items.length;
    const step = diff > 30 ? 30 : diff;
    console.log(step, diff);
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
                        <Card
                            key={id}
                            data={{ authors, title, imageLinks, categories }}
                        />
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
