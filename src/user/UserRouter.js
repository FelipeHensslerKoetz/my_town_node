const express = require('express');
const router = express.Router();
const pagination = require('../shared/pagination');
const idNumberControl = require('../shared/idNumberControl');
const UserService = require('./UserService');

router.post('/users', async (req, res) => {
    await UserService.create(req.body)
    res.send('User was inserted');
})

router.get('/users', pagination, async (req, res) => {
    const page = await UserService.getUsers(req.pagination);

    res.send(page);
})

router.get('/users/:id', idNumberControl, async (req, res, next) => {
    try {
        const user = await UserService.getUser(req.params.id);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.put('/users/:id', idNumberControl, async (req, res) => {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.send(user);
});

router.delete('/users/:id', idNumberControl, async (req, res, next) => {
    await UserService.deleteUser(req.params.id);
    res.send('Removed');
});

module.exports = router;