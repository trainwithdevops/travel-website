import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navbar = () => {
    const user = useSelector((state) => state.user);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Travel Community
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about-us">About Us</Button>
                <Button color="inherit" component={Link} to="/contact-us">Contact Us</Button>
                {user ? (
                    <>
                        <Button color="inherit" component={Link} to="/blog">Blog</Button>
                        <Button color="inherit" component={Link} to="/find-members">Find Members</Button>
                        <Button color="inherit" component={Link} to="/profile">Profile</Button>
                        <Button color="inherit" component={Link} to="/messages">Messages</Button>
                        <Button color="inherit" component={Link} to="/notifications">Notifications</Button>
                        <Button color="inherit" component={Link} to="/trip-planner">Trip Planner</Button>
                        <Button color="inherit" component={Link} to="/group-trips">Group Trips</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
