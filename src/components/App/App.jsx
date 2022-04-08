import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../main/Main.jsx';
import BookPage from '../../BookPage/BookPage.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/:id" element={<BookPage />} />
            </Routes>
        </Router>
    );
};

export default App;
