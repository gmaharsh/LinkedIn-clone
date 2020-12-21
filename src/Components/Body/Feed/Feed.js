import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOptions from './InputOptions/InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/* <h1>Maharsh</h1> */}
                    <InputOptions
                        title="Photo"
                        Icon={ImageIcon}
                        color="#70B5F9" />
                    <InputOptions
                        title="Video"
                        Icon={Subscriptions}
                        color="#E7A33E" />
                    <InputOptions
                        title="Event"
                        Icon={EventNote}
                        color="#C0CBCD" />
                    <InputOptions
                        title="Write Article"
                        Icon={CalendarViewDay}
                        color="#7FC15E" />
                </div>
            </div>

            {/* Post */}
        </div>
    )
}

export default Feed
