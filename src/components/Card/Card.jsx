import React from 'react';
import './Card.css';

const Card = (props) => {
    const {
        data: { authors, title, imageLinks, categories },
    } = props;
    return (
        <div className="card">
            <div className="imgBook">
                <img
                    src={imageLinks?.smallThumbnail}
                    alt="Обложка книги"
                    height="200px"
                    width="150px"
                />
            </div>
            <div>
                <p className="categories">{categories && categories[0]}</p>
            </div>
            <p className="title">{title}</p>
            <div className="authors">
                <p>{authors && authors.join(', ')}</p>
            </div>
        </div>
    );
};

export default Card;
