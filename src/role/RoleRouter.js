const express = require('express');
const router = express.Router();
const Role = require('./Role');
const pagination = require('../shared/pagination');
const idNumberControl = require('../shared/idNumberControl');

router.get('/roles', pagination, async (req, res) => {
    const { size, page } = req.pagination;

    const roles = await Role.findAndCountAll({
        limit: size,
        offset: page * size
    });

    res.send({
        content: roles.rows,
        totalPages: Math.ceil(roles.count / size)
    });
});

router.post('/roles', async (req, res) => {
    try {
        new_role = await Role.create(req.body);
        res.send(new_role);
    } catch (error) {
        res.status(500).json();
    }
});

router.get('/roles/:id', idNumberControl, async (req, res) => {
    const role = await Role.findOne({ where: { id: req.params.id } });
    res.send(role);
});

router.put('/roles/:id', idNumberControl, async (req, res) => {
    const role = await Role.findOne({ where: { id: req.params.id } });
    role.name = req.body.name;
    await role.save();
    res.send(role);
});

module.exports = router;