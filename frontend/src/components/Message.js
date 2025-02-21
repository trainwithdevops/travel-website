import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchMessages = async () => {
            const { data } = await axios.get('/api/messages/inbox', {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setMessages(data);
        };
        fetchMessages();
    }, [user]);

    return (
        <div>
            <h1>Messages</h1>
            {messages.map((message) => (
                <div key={message._id}>
                    <p>From: {message.sender.name}</p>
                    <p>To: {message.receiver.name}</p>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Messages;
