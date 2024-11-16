import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import RoutesTs from '@route/routes';

const Header = () => {
    const location = useLocation();
    const currentRoute = RoutesTs.find(
        (route) => route.path === location.pathname
    );
    return (
        <div className={styles.root}>
            <h1>{currentRoute?.text || 'ページが見つかりません'}</h1>
        </div>
    );
};

export default Header;
