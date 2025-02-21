import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import FindMembers from './pages/FindMembers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Messages from './components/Messages';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/blog" component={Blog} />
                <PrivateRoute path="/find-members" component={FindMembers} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/messages" component={Messages} />
            </Switch>
        </Router>
    );
}

export default App;
