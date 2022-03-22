import React from 'react';
import useData from '../../hooks/useData.jsx';
import './Cards.css';
import Card from '../Card/Card.jsx';

const Cards = () => {
    const { state } = useData();
    const { totalItems, items } = state;
    console.log(items);
    return (
        <>
            {totalItems && <h3>{`Найденных книг: ${totalItems}`}</h3>}
            <div className="container">
                {items?.map(
                    ({
                        volumeInfo: { title, authors, imageLinks, categories },
                    }) => (
                        <Card
                            data={{ authors, title, imageLinks, categories }}
                        />
                    )
                )}
            </div>
        </>
    );
};

export default Cards;
