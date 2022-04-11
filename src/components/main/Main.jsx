import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Cards from '../Cards/Cards.jsx';
import Select from '../Select/Select.jsx';
import './Main.css';

const Main = () => {
    const { t } = useTranslation();
    return (
        <>
            <Select />
            <div className="head fixedHeader">
                <h1 className="h1">{t('head')}</h1>
                <SearchForm />
            </div>
            <Cards />
        </>
    );
};

export default Main;
