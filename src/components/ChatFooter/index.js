import { useState } from "react";
import "./chatFooter.css";

const ChatFooter = ({ socket }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log({ userName: localStorage.getItem('username'), message });

        if (message.trim() && localStorage.getItem('username')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('username'),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
        }
        setMessage('');

    };

    const handleTyping = () => {
        socket.emit('typing', `${localStorage.getItem('username')} is typing`);
    }
    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleTyping}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;