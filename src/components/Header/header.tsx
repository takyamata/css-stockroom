import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            ヘッダー
            <div className={styles.child}>child</div>
        </div>
    );
};

export default Header;
