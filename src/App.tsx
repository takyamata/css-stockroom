import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimateRoutes from '@route/AnimateRoutes';
function App() {
    return (
        <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <AnimateRoutes />
        </BrowserRouter>
    );
}

export default App;
