import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import './SearchForm.css';
import {
    getFetchData,
    setParamsReq,
    removeAll,
} from '../../slices/booksReducer.js';
import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';
import SelectCategories from '../selectCategories/SelectCategories.jsx';
import SortSelection from '../SortSelection/SortSelection.jsx';


const SearchForm = () => {
    const { lng } = useSelector((state) => state.books);
    const { categoryOptions, sortOptions } = useSelector((state) => state.books);

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const input = React.createRef();
    const formik = useFormik({
        initialValues: {
            search: '',
            categories: 'All',
            orderBy: 'relevance',
        },
        onSubmit: async ({ search, categories, orderBy }, { resetForm }) => {
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
        },
    });
    useEffect(() => {
        input.current.focus();
    });
    const { isSubmitting, handleSubmit, handleChange, values } = formik;
    return (
        <form className="params" onSubmit={handleSubmit}>
            <label htmlFor="input" className='sr-only'>{t('inputPlaceHolder')}</label>
                <div className="input" id="input">
                    <Input
                        type='search'
                        name='search'
                        required={true}
                        placeholder={t('inputPlaceHolder')}
                        value={values.search}
                        ref={input}
                        handler={handleChange}
                        />
                    <Button type={'submit'} value={t('button')} className={'button'} disabled={isSubmitting} />
                </div>
            <div className="select">
            <label htmlFor="catigories" className='sr-only'>{t('catigories')}</label>
                    <div className="categoriesContainer">
                        <span className="ctegories-name">{t('catigories')}</span>
                        <SelectCategories
                            id={'categories'}
                            name={'categories'}
                            className={'categories'}
                            value={values.categories}
                            handler={handleChange}
                            options={categoryOptions[lng]}
                        />
                    </div>
                <label htmlFor="order" className='sr-only'>{t('sort')}</label>
                    <div className="sort">
                        <span className="ctegories-name">{t('sort')}</span>
                        <SortSelection
                            id={'order'}
                            name={'orderBy'}
                            className={'categories'}
                            value={values.orderBy}
                            handler={handleChange}
                            options={sortOptions[lng]}
                        />
                        {/* <select
                            id="order"
                            name="orderBy"
                            className="categories"
                            value={values.orderBy}
                            onChange={handleChange}
                        >
                            {sortOptions[lng].map(([key, val]) => {
                                if (key === 'relevance') {
                                    return (
                                        <option key={_.uniqueId()} value={key} defaultValue>{val}</option>
                                    );
                                }
                                return <option key={_.uniqueId()} value={key}>{val}</option>
                            })}
                        </select> */}
                    </div>
            </div>
        </form>
    );
};

export default SearchForm;
