import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import './SearchForm.css';
import {
    getFetchData,
    setParamsReq,
    removeAll,
} from '../../slices/booksReducer.js';

const optionCategoriesEn = [
    ['All', 'All'],
    ['Art', 'Art'],
    ['Biography', 'Biography'],
    ['Computers', 'Computers'],
    ['History', 'History'],
    ['Medical', 'Medical'],
    ['Poetry', 'Poetry'],
];
const optionCategoriesRu = [
    ['All', 'Все'],
    ['Art', 'Арт'], 
    ['Biography', 'Биография'], 
    ['Computers', 'Компьютеры'], 
    ['History', 'История'], 
    ['Medical', 'Медицина'], 
    ['Poetry', 'Химия'],
];

const sortEn = [
    ['relevance', 'relevance'],
    ['newest', 'newest'],
];

const sortRu = [
    ['relevance', 'Актуальные'],
    ['newest', 'Новые'],
];

const sortOpt = {
    en: sortEn,
    ru: sortRu,
}

const optionsCat = {
    ru: optionCategoriesRu,
    en: optionCategoriesEn,
};

const SearchForm = () => {
    const { lng } = useSelector((state) => state.books);
    console.log(lng);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const input = useRef();
    const formik = useFormik({
        initialValues: {
            search: '',
            categories: 'All',
            orderBy: 'relevance',
        },
        onSubmit: async ({ search, categories, orderBy }, { resetForm }) => {
            try {
                dispatch(removeAll());
                dispatch(
                    setParamsReq({
                        search,
                        categories,
                        orderBy,
                        startIndex: 0,
                    })
                );
                await dispatch(
                    getFetchData({
                        text: search,
                        categories,
                        orderBy,
                        startIndex: 0,
                    })
                );
                resetForm();
            } catch (err) {
                throw new Error(`Network err${err}`);
            }
        },
    });
    useEffect(() => {
        input.current.focus();
    }, []);
    const { isSubmitting, handleSubmit, handleChange, values } = formik;
    return (
        <form className="params" onSubmit={handleSubmit}>
            <label htmlFor="input" className='sr-only'>{t('inputPlaceHolder')}</label>
                <div className="input" id="input">
                    <input
                        type="search"
                        name="search"
                        placeholder={t('inputPlaceHolder')}
                        required
                        className="search"
                        value={values.search}
                        ref={input}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value={t('button')}
                        className="button"
                        disabled={isSubmitting}
                    />
                </div>
            <div className="select">
            <label htmlFor="catigories" className='sr-only'>{t('catigories')}</label>
                    <div className="categoriesContainer">
                        <span className="ctegories-name">{t('catigories')}</span>
                        <select
                        id="catigories"
                            name="categories"
                            className="categories"
                            value={values.categories}
                            onChange={handleChange}
                        >
                            {optionsCat[lng].map(([key, val]) => {
                                if (key === 'all') {
                                    return (
                                        <option
                                            key={_.uniqueId()}
                                            value={key}
                                            defaultValue
                                        >
                                            {val}
                                        </option>
                                    );
                                }
                                return (
                                    <option
                                        key={_.uniqueId()}
                                        value={key}
                                    >
                                        {val}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                <label htmlFor="order" className='sr-only'>{t('sort')}</label>
                    <div className="sort">
                        <span className="ctegories-name">{t('sort')}</span>
                        <select
                        id="order"
                            name="orderBy"
                            className="categories"
                            value={values.orderBy}
                            onChange={handleChange}
                        >
                            {sortOpt[lng].map(([key, val]) => {
                                if (key === 'relevance') {
                                    return (
                                        <option value={key} defaultValue>{val}</option>
                                    );
                                }
                                return <option value={key}>{val}</option>
                            })}
                        </select>
                    </div>
            </div>
        </form>
    );
};

export default SearchForm;
