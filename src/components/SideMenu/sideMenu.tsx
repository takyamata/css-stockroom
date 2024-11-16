import React, { useState, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sideMenu.module.scss';
import { LuArrowLeftToLine, LuArrowRightToLine } from 'react-icons/lu';
import { BsLayoutSidebarReverse, BsLayoutSidebar } from 'react-icons/bs';

interface SideMenuProps {}

interface menuItem {
    text: string;
    path: string;
    // icon: React.ComponentType;
}

const SideMenu: FC<SideMenuProps> = ({}) => {
    const [navState, setNavState] = useState<'open' | 'close'>('close');
    const [navPosition, setNavPosition] = useState<'left' | 'right'>('left');
    const toggleNav = () => {
        setNavState((prevState) => (prevState === 'open' ? 'close' : 'open'));
    };
    const toggleNavPosition = () => {
        setNavPosition((prevState) =>
            prevState === 'left' ? 'right' : 'left'
        );
    };
    const MenuItems: menuItem[] = [
        { text: 'Home', path: '/' },
        { text: 'Button', path: '/button' },
        { text: 'Link', path: '/link' },
        { text: 'Css Property', path: '/css-property' },
        { text: 'Other', path: '/other' },
        { text: 'Blog', path: '/blog' },
    ];
    return (
        <nav
            className={`${styles.root} `}
            data-state={navState}
            data-position={navPosition}
        >
            <ul className={styles.ul}>
                {MenuItems.map((item, index) => (
                    <li className={styles.li} key={item.text}>
                        <NavLink to={item.path} className={styles.a}>
                            <i className={styles.i}></i>
                            <span key={index} className={styles.span}>
                                {item.text}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className={styles.menu}>
                <li>
                    <button
                        type="button"
                        aria-label="閉じる"
                        className={styles.button_close}
                        onClick={toggleNav}
                    >
                        {navPosition === 'left' ? (
                            <LuArrowLeftToLine />
                        ) : (
                            <LuArrowRightToLine />
                        )}
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        aria-label="メニュー配置変えボタン"
                        className={styles.button_position}
                        onClick={toggleNavPosition}
                    >
                        {navPosition === 'left' ? (
                            <BsLayoutSidebarReverse />
                        ) : (
                            <BsLayoutSidebar />
                        )}
                    </button>
                </li>
            </ul>
            <button
                type="button"
                aria-label="開く"
                className={styles.button_open}
                onClick={toggleNav}
            />
        </nav>
    );
};

export default SideMenu;
