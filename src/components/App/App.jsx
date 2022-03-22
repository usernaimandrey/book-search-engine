import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import './App.css';
import dataContext from '../../Context/index.jsx';
import Cards from '../Cards/Cards.jsx';

const App = () => {
    const [state, setState] = useState([]);
    const set = (data) => setState(data);
    return (
        <dataContext.Provider value={{ state, set }}>
            <div className="head fixedHeader">
                <h1 className="h1">Search for books</h1>
                <SearchForm />
            </div>
            <Cards />
        </dataContext.Provider>
    );
};

export default App;
