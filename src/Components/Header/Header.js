import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import NetworkIcon from '@material-ui/icons/SupervisorAccount';
import JobIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOptions from './HeaderOptions/HeaderOptions';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';



function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            {/* <h1>This is the header</h1> */}
            <div className="header__left">
                <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                    alt=""
                />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={NetworkIcon} title="My Network" />
                <HeaderOptions Icon={JobIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions onClick={logoutOfApp} avatar="https://avatars1.githubusercontent.com/u/18025028?s=460&u=fde38e6ea682a65fdde7ce4bb522f1ec808cac41&v=4" />
            </div>
        </div>
    )
}

export default Header
