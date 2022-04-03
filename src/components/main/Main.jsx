import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Cards from '../Cards/Cards.jsx';
import './Main.css';

const Main = () => (
    <>
        <div className="head fixedHeader">
            <h1 className="h1">Search for books</h1>
            <SearchForm />
        </div>
        <Cards />
    </>
);

export default Main;
