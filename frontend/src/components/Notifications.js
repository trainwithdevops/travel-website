import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchNotifications = async () => {
            const { data } = await axios.get('/api/notifications', {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setNotifications(data);
        };
        fetchNotifications();
    }, [user]);

    const markAsRead = async (id) => {
        await axios.patch(`/api/notifications/${id}/read`, {}, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        setNotifications(notifications.map(notification =>
            notification._id === id ? { ...notification, read: true } : notification
        ));
    };

    return (
        <div>
            <h1>Notifications</h1>
            {notifications.map((notification) => (
                <div key={notification._id}>
                    <p>{notification.message}</p>
                    {!notification.read && (
                        <button onClick={() => markAsRead(notification._id)}>Mark as Read</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Notifications;
