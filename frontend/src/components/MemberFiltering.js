import React, { useState, useEffect } from 'react';
import memberService from '../services/memberService';

const MemberFiltering = () => {
    const [filters, setFilters] = useState({
        destination: '',
        budget: '',
        currency: '',
        language: '',
    });
    const [members, setMembers] = useState([]);

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await memberService.getMembers(filters);
            setMembers(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Find Members</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Destination</label>
                    <input
                        type="text"
                        name="destination"
                        value={filters.destination}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Budget</label>
                    <input
                        type="text"
                        name="budget"
                        value={filters.budget}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Currency</label>
                    <input
                        type="text"
                        name="currency"
                        value={filters.currency}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Language</label>
                    <input
                        type="text"
                        name="language"
                        value={filters.language}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Search</button>
            </form>
            <div>
                <h2>Results</h2>
                <ul>
                    {members.map((member) => (
                        <li key={member.id}>{member.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MemberFiltering;
