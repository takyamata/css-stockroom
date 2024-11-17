import React from 'react';
import styles from './Main.module.scss';

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return <main className={styles.root}>{children}</main>;
};

export default Main;
