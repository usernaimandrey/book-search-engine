import React from 'react';
import './Card.css';

const Card = (props) => {
    const {
        data: { authors, title, imageLinks, categories },
    } = props;
    console.log(authors, title, imageLinks, categories);
    return (
        <div className="card">
            <img src={imageLinks.smallThumbnail} alt="Обложка книги" />
        </div>
    );
};

export default Card;
