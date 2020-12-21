import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOptions from './InputOptions/InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from '../Post/Post';
import { db } from '../../../firebase';
import firebase from 'firebase';

function Feed() {

    const [input, setInput] = useState('')
    const [post, setPost] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPost(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })))
        ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").orderBy("timestamp", "asc").add({
            name: 'Maharsh',
            description: 'Seeking Full-time Opportunities in Software Development || React Lover',
            message: input,
            photoUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQGFIw1OAq0rug/profile-displayphoto-shrink_200_200/0/1551881769648?e=1612396800&v=beta&t=5amu-D6SxsSO_aoRKZwevN-3gjOwzOdou7e_lhgATEw',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            type="text"
                            value={input}
                            onChange={
                                e => setInput(e.target.value)
                            }
                        />
                        <button onClick={sendPost} type="submit">Send</button>
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

            {post.map(({id , data: {name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )) }

            {/* Post */}
            {/* <Post
                name="Rachana Bhaskar"
                description="Pursuing Master's in Computer Science from Illinois Institute of Technology and Ex-Software Engineer at Dell EMC."
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
                photoUrl="https://certifyme.app/interns/certificates/assets/img/img/rachana.png"
            /> */}
        </div>
    )
}

export default Feed
