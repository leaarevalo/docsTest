const { createError } = require('../utils');
let users = [
    {
        id: 1,
        firstName: 'tomas',
        lastName: 'vasquez'
    }
];

let id = 2;

const getUsers = () => {
    return users;
};

const getUserById = (id) => {
    const user = users.find(u => { return u.id === id });
    if (!user) { throw createError('usuario no encontrado', 404); }
    return user;
};

const createUser = (firstName, lastName) => {
    if (!firstName || !lastName) { throw createError('parametros insuficientes', 500); }
    const newUser = { firstName, lastName, id };
    users.push(newUser);
    id++
    return newUser;
};

const deleteUser = (id) => {
    const user = getUserById(id);
    users = users.filter(u => { return u.id !== id });
    return `usuario ${user.firstName} ${user.lastName} eliminado`;
};

const updateUser = (id, firstName, lastName) => {
    const user = getUserById(id);
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    return user;
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};
