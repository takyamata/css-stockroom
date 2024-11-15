import React, { useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sideMenu.module.scss';

interface SideMenuProps {}

interface menuItem {
    text: string;
    path: string;
    // icon: React.ComponentType;
}

const SideMenu: FC<SideMenuProps> = ({}) => {
    const [navState, setNavState] = useState<'open' | 'close'>('open');
    const toggleNav = () => {
        setNavState((prevState) => (prevState === 'open' ? 'close' : 'open'));
    };
    const MenuItems: menuItem[] = [
        { text: 'Home', path: '/' },
        { text: 'Button', path: '/button' },
        { text: 'Link', path: '/link' },
        { text: 'Other', path: '/other' },
        { text: 'Blog', path: '/blog' },
    ];
    return (
        <nav className={`${styles.root} `} data-state={navState}>
            <ul className={styles.ul}>
                {MenuItems.map((item, index) => (
                    <li className={styles.li}>
                        <NavLink
                            key={item.text}
                            to={item.path}
                            className={styles.a}
                        >
                            <i className={styles.i}></i>
                            <span key={index} className={styles.span}>
                                {item.text}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button
                type="button"
                aria-label="閉じる"
                className={styles.close_button}
                onClick={toggleNav}
            >
                閉じる
            </button>
            <button
                type="button"
                aria-label="開く"
                className={styles.open_button}
                onClick={toggleNav}
            />
        </nav>
    );
};

export default SideMenu;
