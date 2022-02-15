import React, { useRef, useEffect, useState } from 'react';
import './SearchForm.css';
import validationSchema from '../../validator';
import { request } from '../Request';


const SearchForm = () => {
    const [search, setValue] = useState('');
    const [categories, setCatigorie] = useState('');
    const [isValid, setValid] = useState(true);
    const input = useRef();
    useEffect(() => {
        input.current.focus();
    }, []);
    const hendlerChangeInput = (e) => {
        const { value } = e.target;
        setValue(value);
    };
    const hendlerChangeCategories = (e) => {
        const { value } = e.target;
        setCatigorie(value);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (validationSchema(search)) {
            setValid(true);
            await request(search);
            setValue('');
            input.current.focus();
        } else {
            setValid(false);
            input.current.focus();
        }
    }
    return (
        <form className="params" onSubmit={onSubmit}>
                <label>
                    <div className="inputWraper">
                        <div className="input">
                          <input  type="text"  className="serch" value={search} ref={input} onChange={hendlerChangeInput} />
                          {isValid ? null : <div className="feedback"><span>Поле обязательно к заполнению</span></div>}
                        </div>
                        <input type='submit' value='Search' className="button" />
                    </div>
                </label>
                <div className="select">
                <label>
                    <div className="categoriesContainer">
                      <span className="ctegories-name">Categories:</span> 
                       <select name="categories" className="categories" value={categories} onChange={hendlerChangeCategories}>
                         <option value="all" defaultValue>all</option>
                         <option value="art">art</option>
                         <option value="allbiography">allbiography</option>
                         <option value="computers">computers</option>
                         <option value="history">history</option>
                         <option value="medical">medical</option>
                         <option value="poetry">poetry</option>
                        </select>
                    </div>
                 </label>
                <label className="sort-params">
                    <div className="sort">
                        <span className="ctegories-name">Sorting By:</span>
                        <select name="sorting" className="categories">
                          <option value="relevance" defaultValue>relevance</option>
                          <option value="newest">newest</option>
                        </select>
                    </div>
                </label>
                </div>
                
                </form>
    )
};

export default SearchForm;


  