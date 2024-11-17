import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import { parentRoutes, gsapRoutes } from '@route/routes';

const Header = () => {
    const location = useLocation();
    const allRoutes = [...parentRoutes, ...gsapRoutes];
    const currentRoute = allRoutes.find(
        (route) => route.path === location.pathname
    );
    return (
        <div className={styles.root}>
            <h1>{currentRoute?.text || 'ページが見つかりません'}</h1>
        </div>
    );
};

export default Header;
