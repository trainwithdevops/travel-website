const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const helmet = require('helmet');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const memberRoutes = require('./routes/memberRoutes');
const messageRoutes = require('./routes/messageRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const tripRoutes = require('./routes/tripRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

const csrfProtection = csurf({ cookie: true });

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/trips', tripRoutes);

app.use(csrfProtection);
app.use((req, res, next) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
});

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
