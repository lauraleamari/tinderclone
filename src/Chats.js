import React from 'react'
import './Chats.css'
import Chat from './Chat'

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey! how are you :)"
                timestamp="53 minutes ago"
                profilePic="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png"
            />
            <Chat
                name="Ellen"
                message="Whats up <3?"
                timestamp="53 minutes ago"
                profilePic="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png"
            />
            <Chat
                name="Sandra"
                message="Oie"
                timestamp="3 days ago"
                profilePic="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png"
            />
            <Chat
                name="Natash"
                message="Ooops there is he is ..."
                timestamp="1 week ago"
                profilePic="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png"
            />
        </div>
    )
}

export default Chats
