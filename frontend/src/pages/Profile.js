import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchProfile = async () => {
            const { data } = await axios.get(`/api/users/${user._id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setProfile(data);
        };
        fetchProfile();
    }, [user]);

    const updateProfile = async (e) => {
        e.preventDefault();
        await axios.put(`/api/users/${user._id}`, profile, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
    };

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={updateProfile}>
                <label>
                    Bio:
                    <input
                        type="text"
                        value={profile.bio || ''}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        value={profile.location || ''}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    />
                </label>
                <label>
                    Languages:
                    <input
                        type="text"
                        value={profile.languages || ''}
                        onChange={(e) => setProfile({ ...profile, languages: e.target.value.split(',') })}
                    />
                </label>
                <label>
                    Destinations:
                    <input
                        type="text"
                        value={profile.destinations || ''}
                        onChange={(e) => setProfile({ ...profile, destinations: e.target.value.split(',') })}
                    />
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
