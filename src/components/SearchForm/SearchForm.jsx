import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import _ from 'lodash';
import './SearchForm.css';
import request from '../request.js';

const optionCategories = [
    'all',
    'art',
    'allbiography',
    'allbiography',
    'computers',
    'history',
    'medical',
    'poetry',
];
const SearchForm = () => {
    const input = useRef();
    const formik = useFormik({
        initialValues: {
            search: '',
            categories: 'all',
            orderBy: 'relevance',
        },
        onSubmit: async ({ search, categories, orderBy }, { resetForm }) => {
            await request(search, categories, orderBy);
            resetForm();
        },
    });
    useEffect(() => {
        input.current.focus();
    }, []);
    const { isSubmitting, handleSubmit, handleChange, values } = formik;
    return (
        <form className="params" onSubmit={handleSubmit}>
            <label>
                <div className="input">
                    <input
                        type="search"
                        name="search"
                        placeholder="find your book..."
                        required
                        className="search"
                        value={values.search}
                        ref={input}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="button"
                        disabled={isSubmitting}
                    />
                </div>
            </label>
            <div className="select">
                <label>
                    <div className="categoriesContainer">
                        <span className="ctegories-name">Categories:</span>
                        <select
                            name="categories"
                            className="categories"
                            value={values.categories}
                            onChange={handleChange}
                        >
                            {optionCategories.map((catigorie) => {
                                if (catigorie === 'all') {
                                    return (
                                        <option
                                            key={_.uniqueId()}
                                            value={catigorie}
                                            defaultValue
                                        >
                                            {catigorie}
                                        </option>
                                    );
                                }
                                return (
                                    <option
                                        key={_.uniqueId()}
                                        value={catigorie}
                                    >
                                        {catigorie}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </label>
                <label>
                    <div className="sort">
                        <span className="ctegories-name">Sorting By:</span>
                        <select
                            name="orderBy"
                            className="categories"
                            value={values.orderBy}
                            onChange={handleChange}
                        >
                            <option value="relevance" defaultValue>
                                relevance
                            </option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </label>
            </div>
        </form>
    );
};

export default SearchForm;
