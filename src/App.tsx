import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppLayout from '@layout/appLayout';
import RoutesTs from '@route/routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    {RoutesTs.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            index={route.index}
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
