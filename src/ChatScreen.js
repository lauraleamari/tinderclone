import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

const ChatScreen = () => {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            name: 'elen',
            image: 'https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png',
            message: 'whats up'
        },
        {
            name: 'elen',
            image: 'https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close.png',
            message: 'hows it going!'
        },
        {
            message: 'Hi! How are you Ellen?'
        },
        {
            message: 'I am Pedro'
        }
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You match width ellen on 10/08/2020</p>
            {messages.map( message => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div> ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
            ))}

            <form className="chatScreen__input">
                <input
                    className="chatScreen__inputField"
                    placeholder="escreva sua mensagem..."
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    type="submit"
                    className="chatScreen__inputButton"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatScreen
