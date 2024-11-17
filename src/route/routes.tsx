import { RouteObject } from 'react-router-dom';
import Home from '@pages/Home';
import Button from '@pages/Button';
import Link from '@pages/Link';
import CssProperty from '@pages/CssProperty';
import Other from '@pages/Other';
import Blog from '@pages/Blog';
import NoMatch from '@pages/NoMatch';
import Gsap from '@pages/Gsap';
import Scroll from '@components/Gsap/Scroll';

// 既存のRouteObjectに含まれていないものは別途使で拡張する
type CustomRouteObject = RouteObject & {
    text?: string;
};

const parentRoutes: CustomRouteObject[] = [
    {
        path: '/',
        element: <Home />,
        index: true,
        text: 'Home',
    },
    {
        path: '/button',
        element: <Button />,
        text: 'button',
    },
    {
        path: '/link',
        element: <Link />,
        text: 'link',
    },
    {
        path: '/css-property',
        element: <CssProperty />,
        text: 'css-property',
    },
    {
        path: '/gsap',
        element: <Gsap />,
        text: 'GSAP',
    },
    {
        path: '/other',
        element: <Other />,
        text: 'other',
    },
    {
        path: '/blog',
        element: <Blog />,
        text: 'blog',
    },
    {
        path: '*',
        element: <NoMatch />,
        text: '',
    },
];

const gsapRoutes: CustomRouteObject[] = [
    {
        path: '/gsap/scroll',
        element: <Scroll />,
        text: 'scroll',
    },
];

export { parentRoutes, gsapRoutes };
