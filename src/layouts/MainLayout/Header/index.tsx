import { useCallback, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { CHEV_DOWN, CHEV_LEFT, Menu, MENU } from 'assets/svgs';
import { Button } from 'components';
import { useAuthContext } from 'contexts';
import { useEventListener, useOnClickOutside } from 'hooks';

import './styles.scss';
import { useNavigation } from 'react-day-picker';

const links = [
    { to: '/tours', title: 'Tours' },
    {
        to: '/guides',
        title: 'Guides',
    },
    {
        to: '/themes',
        title: 'Themes',
    },
    {
        to: '/destinations',
        title: 'Destinations',
    },
];

const _renderGuest = (onLogin: () => void) => {
    return (
        <Button
            className="login-btn"
            type="primary"
            variant="filled"
            onClick={onLogin}
        >
            Log in
        </Button>
    );
};

const _renderUser = (onSignOut: () => void) => {
    return (
        <div className="user-info-wrapper relative">
            <div className="user-info-wrapper__user flex items-center">
                <img
                    className="avatar"
                    src="https://i.pravatar.cc/200"
                    alt=""
                />
                <img src={CHEV_DOWN} alt="" />
            </div>
            <div className="user-info-wrapper__drop-down absolute text-dark">
                <div className="item">
                    <span className="h5">Top-Up</span>
                </div>
                <Link to="/profile/patrick">
                    <div className="item flex items-center item--profile text-dark">
                        <img
                            className="avatar"
                            src="https://i.pravatar.cc/200"
                            alt=""
                        />
                        <span className="h5">Profile</span>
                    </div>
                </Link>
                <div className="item" onClick={onSignOut}>
                    <span className="h5">Log Out</span>
                </div>
            </div>
        </div>
    );
};

export default function Header() {
    const { isAuth, onLogin, onSignOut } = useAuthContext();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [show, setShow] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === '/', [pathname]);

    const currentPathIdx = useMemo(
        () => links.findIndex((x) => pathname.startsWith(x.to)),
        [pathname]
    );

    useOnClickOutside(menuRef, () => setMenuOpen(false));

    const handleScroll = useCallback(
        (e: any) => {
            const window = e.currentTarget;
            if (typeof window !== 'undefined') {
                if (window.scrollY === 0) {
                    setShow(true);
                    setLastScrollY(window.scrollY);
                    return;
                }
                if (window.scrollY > lastScrollY) {
                    // Scrolling down
                    setShow(false);
                } else {
                    // Scrolling up
                    setShow(true);
                }
                setLastScrollY(window.scrollY);
            }
        },
        [lastScrollY]
    );

    useEventListener('scroll', handleScroll);

    return (
        <nav
            className={clsx(
                'fixed header text-white flex items-center',
                !show && 'header--hidden',
                !isHome && 'header--light'
            )}
        >
            <div className="container w-full flex items-center justify-between">
                <Link to="/">
                    <div className="logo"></div>
                </Link>
                {!isHome && (
                    <Link
                        to="/"
                        className="flex items-center text-dark font-bold text-base"
                    >
                        <img src={CHEV_LEFT} alt="" />
                        <span>{links[currentPathIdx].title}</span>
                    </Link>
                )}
                <div className="flex-grow"></div>
                <ul className="flex uppercase">
                    {links.map(({ to, title }, idx) => (
                        <li key={idx} className="h4">
                            <NavLink
                                className={({ isActive }) =>
                                    clsx('link', isActive ? 'link--active' : '')
                                }
                                to={to}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {isAuth ? _renderUser(onSignOut) : _renderGuest(onLogin)}
                <div className="relative menu-wrapper flex items-center justify-center">
                    <Menu
                        className="menu"
                        fill={!isHome ? '#333333' : undefined}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    />
                    {menuOpen && (
                        <div
                            ref={menuRef}
                            className="menu-popup absolute uppercase"
                        >
                            {links.map(({ to, title }, idx) => (
                                <li key={idx} className="h6">
                                    <NavLink
                                        className={({ isActive }) =>
                                            clsx(
                                                'link',
                                                isActive ? 'link--active' : ''
                                            )
                                        }
                                        onClick={() => setMenuOpen(false)}
                                        to={to}
                                    >
                                        {title}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="h6" onClick={onLogin}>
                                <NavLink className="link" to="">
                                    Log in
                                </NavLink>
                            </li>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
