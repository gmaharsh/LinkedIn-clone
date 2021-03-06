import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOptions.css'

function HeaderOptions({ avatar, Icon,  title, onClick }) {
    return (
        <div onClick={onClick} className="headerOptions">
            {Icon && <Icon className="headerOptions__icons" />}
            {avatar && (
                <Avatar className="headerOptions__icons" src
                ={avatar} />
            )}
            <h3 className="headerOptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
