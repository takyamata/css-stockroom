import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppLayout from '@layout/AppLayout';
import { parentRoutes, gsapRoutes } from '@route/routes';
// import AnimatedRoute from '@components/AnimatedRoute/animatedRoute';

function App() {
    return (
        <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    {/* 第二階層 */}
                    {parentRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                            index={route.index}
                        />
                    ))}
                    {/* 第三階層 Gsap */}
                    {gsapRoutes.map((route) => (
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
