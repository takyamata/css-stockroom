import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideMenu.module.scss';
import { useSideMenuLogic } from './SideMenuLogic';
import { LuArrowLeftToLine, LuArrowRightToLine } from 'react-icons/lu';
import { BsLayoutSidebarReverse, BsLayoutSidebar } from 'react-icons/bs';

interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
    const {
        navState,
        navPosition,
        openNav,
        closeNav,
        toggleNavPosition,
        MenuItems,
        location,
    } = useSideMenuLogic();

    return (
        <nav
            className={`${styles.root}`}
            data-state={navState}
            data-position={navPosition}
        >
            <ul className={styles.ul}>
                {MenuItems.map((item) => (
                    <li
                        className={styles.li}
                        key={item.text}
                        data-current={
                            item.path === '/' && location.pathname === '/'
                                ? 'true'
                                : location.pathname.startsWith(item.path) &&
                                  item.path !== '/'
                                ? 'true'
                                : 'false'
                        }
                    >
                        <NavLink
                            to={item.path}
                            className={styles.a}
                            onClick={closeNav}
                        >
                            <span className={styles.span}>{item.text}</span>
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
                        onClick={closeNav}
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
                onClick={openNav}
            />
        </nav>
    );
};

export default SideMenu;
