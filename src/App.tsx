import React from 'react';
import './App.scss';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppLayout from './layout/appLayout';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import NoMatch from './pages/NoMatch';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/Home2" element={<Home2 />} />
                    <Route path="/Home3" element={<Home3 />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
