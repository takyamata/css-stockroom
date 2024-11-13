import React from 'react';
import styles from './appLayout.module.scss';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu/sideMenu';
import Header from '../components/Header/header';
import Main from '../components/Main/main';

const AppLayout = () => {
    return (
        <div className={styles.root}>
            <Header />
            <SideMenu />
            <Main>
                <Outlet />
            </Main>
        </div>
    );
};

export default AppLayout;
