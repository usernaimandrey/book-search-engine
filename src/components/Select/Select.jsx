import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLng } from '../../slices/booksReducer';
import './Select.css';

const Select = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const hendler = (e) => {
        const { value } = e.target;
        i18n.changeLanguage(value);
        dispatch(setLng({ value }));
    };
    return (
        <span className="custom-dropdown big">
            <select onChange={hendler}>
                <option value="en" defaultValue>
                    EN
                </option>
                <option value="ru">RU</option>
            </select>
        </span>
    );
};

export default Select;
