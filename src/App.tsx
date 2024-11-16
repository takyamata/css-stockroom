import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppLayout from './layout/appLayout';
import Home from './pages/Home';
import Button from './pages/Button';
import Link from './pages/Link';
import CssProperty from './pages/CssProperty';
import Other from './pages/Other';
import Blog from './pages/Blog';
import NoMatch from './pages/NoMatch';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />

                    <Route path="/button" element={<Button />} />
                    <Route path="/link" element={<Link />} />
                    <Route path="/css-property" element={<CssProperty />} />
                    <Route path="/other" element={<Other />} />
                    <Route path="/blog" element={<Blog />} />

                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
