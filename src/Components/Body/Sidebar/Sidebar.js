import { Avatar } from '@material-ui/core'
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Maharsh Hetal Gheewala</h2>
                <p>MERN Stack Developer</p>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">1234</p>
                </div>
            </div>
            <div className="sidebar__premium">
                
            </div>
            <div className="sidebar__bottom">
                <p>Recents</p>
                {recentItem('reactJs')}
                {recentItem('programing')}
                {recentItem('software')}
                {recentItem('design')}
                {recentItem('reactJs')}
            </div>
        </div>
    )
}

export default Sidebar
