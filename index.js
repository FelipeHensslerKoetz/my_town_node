const express = require('express');
const sequelize = require('./database');
const app = express();
const Role = require('./Role');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Drop do banco a cada start
sequelize.sync({ force: true }).then(async () => {
    console.log('Database is ready.')

    for (let i = 0; i <= 5; i++) {
        const user = {
            name: `user${i}`,
            email: 'user${i}@gmail.com',
            password: 'Password'
        }

        await User.create(user);
    }
});

function InvalidIdException() {
    this.status = 400;
    this.message = 'Invalid ID';
}

function UserNotFoundException() {
    this.status = 404;
    this.message = 'User not found.';
}


app.use(express.json());


app.post('/users', async (req, res) => {
    await User.create(req.body)
    res.send('User was inserted');
})

app.get('/users', async (req, res) => {
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);

    let page = 0;
    let size = 10;

    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber
    }

    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
        size = sizeAsNumber
    }

    const users = await User.findAndCountAll({
        limit: size,
        offset: page * size
    });

    res.send({
        content: users.rows,
        totalPages: Math.ceil(users.count / size)
    });
})

app.get('/users/:id', async (req, res, next) => {
    const id = Number.parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return next(new InvalidIdException());
    }

    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
        return next(new UserNotFoundException());
    }

    res.send(user);
});

app.put('/users/:id', async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    user.user_name = req.body.user_name;
    await user.save();
    res.send(user);
});

// My Town Routes

app.get('/roles', async (req, res) => {
    const roles = await Role.findAll();
    res.send(roles);
});

app.post('/roles', async (req, res) => {
    try {
        new_role = await Role.create(req.body);
        res.send(new_role);
    } catch (error) {
        res.status(500).json();
    }
});

app.get('/roles/:id', async (req, res) => {
    const role = await Role.findOne({ where: { id: req.params.id } });
    res.send(role);
});

app.put('/roles/:id', async (req, res) => {
    const role = await Role.findOne({ where: { id: req.params.id } });
    role.name = req.body.name;
    await role.save();
    res.send(role);
});

app.use((err, req, res, next) => {
    return res.status(err.status).send({
        message: err.message,
        timestamp: Date.now(),
        path: req.originalUrl
    })
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})