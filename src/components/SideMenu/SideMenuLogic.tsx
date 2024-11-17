import { useState, useEffect } from 'react';
import { parentRoutes } from '@route/routes';
import { useLocation } from 'react-router-dom';

export const useSideMenuLogic = () => {
    // sidemenuの開く閉じるの状態定義と初期値
    const [navState, setNavState] = useState<'open' | 'close'>('close');
    // sidemenuに配置が左か右かの状態定義。リロードしても配置を保持したいのでローカルストレージの状態を読み込む。なければ初期値は右。
    const [navPosition, setNavPosition] = useState<'left' | 'right'>(() => {
        const savedPosition = localStorage.getItem('navPosition');
        return savedPosition ? (savedPosition as 'left' | 'right') : 'right';
    });

    // navPositionが変更されたときにローカルストレージに保存
    useEffect(() => {
        localStorage.setItem('navPosition', navPosition);
    }, [navPosition]);

    const openNav = () => {
        setNavState('open');
    };
    const closeNav = () => {
        setNavState('close');
    };

    const toggleNavPosition = () => {
        setNavPosition((prevState) =>
            prevState === 'left' ? 'right' : 'left'
        );
    };

    // NoMatchを除外したMenuItemsを作成
    const MenuItems = parentRoutes
        .filter((route) => route.text && route.path !== '*')
        .map((route) => ({
            text: route.text!,
            path: route.path,
        }));

    const location = useLocation();

    return {
        navState,
        navPosition,
        openNav,
        closeNav,
        toggleNavPosition,
        MenuItems,
        location,
    };
};
