import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu/sideMenu';
import Header from '../components/Header/header';

const AppLayout = () => {
    return (
        <div className="layout">
            <Header />
            <SideMenu />
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
