const User = require('./User');
const UserNotFoundException = require('./UserNotFoundException');

const create = async (user) => {
    await User.create(user)
}

const getUsers = async (pagination) => {
    const { size, page } = pagination;

    const usersWithCount = await User.findAndCountAll({
        limit: size,
        offset: page * size
    });

    return { content: usersWithCount.rows, totalPages: Math.ceil(usersWithCount.count / size) }
}

const getUser = async (id) => {
    user = await User.findOne({ where: { id: id } });
    if (!user) {
        throw new UserNotFoundException();
    }
    return user;
}

const updateUser = async(id, body) => {
    const user = await User.findOne({ where: { id: id } });
    user.name = body.name;
    await user.save();
    return user;
}

const deleteUser = async(id) => {
    await User.destroy({ where: { id: id } });
}

module.exports = {
    create,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}