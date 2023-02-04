import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';

import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faKeyboard,
    faEarthAsia,
    faCircleQuestion,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}

                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faInbox} /> */}
                                    <span className={cx('badge')}>12</span>

                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Fragment>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </Fragment>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b0e3c3d6e22e3a1668a3d6d4a675c627~c5_100x100.jpeg?x-expires=1675317600&x-signature=6lhAW3um782mHD2ywfMF4sqjEJo%3D"
                                className={cx('user-avatar')}
                                alt=""
                                fallback=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
