import React from 'react';
import { useTranslation } from 'react-i18next';
import './Select.css';

const Select = () => {
    const { i18n } = useTranslation();
    const hendler = (e) => {
        const { value } = e.target;
        i18n.changeLanguage(value);
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
