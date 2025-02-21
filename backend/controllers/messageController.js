const Message = require('../models/Message');

const sendMessage = async (req, res) => {
    const { receiver, content } = req.body;
    try {
        const message = await Message.create({
            sender: req.user._id,
            receiver,
            content,
        });
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [{ sender: req.user._id }, { receiver: req.user._id }],
        })
        .populate('sender', 'name')
        .populate('receiver', 'name')
        .sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { sendMessage, getMessages };
