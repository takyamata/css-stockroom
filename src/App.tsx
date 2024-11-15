import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppLayout from './layout/appLayout';
import Home from './pages/Home';
import Button from './pages/Button';
import Link from './pages/Link';
import Other from './pages/Other';
import Blog from './pages/Blog';
import NoMatch from './pages/NoMatch';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />

                    <Route path="/Button" element={<Button />} />
                    <Route path="/Link" element={<Link />} />
                    <Route path="/Other" element={<Other />} />
                    <Route path="/Blog" element={<Blog />} />

                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
