const Services = require('./service');
const { createError } = require('../utils');

const getUsers = async (req, res) => {
    try {
        const users = Services.getUsers();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).send(error.data || error);
    }
};

const getUserById = async (req, res) => {
    try {
        const { params: { id } } = req;
        if (!id) { throw createError('parametros insuficientes', 500); }
        const user = Services.getUserById(Number(id));
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).send(error.data || error);
    }
};

const createUser = (req, res) => {
    try {
        const { body: { firstName, lastName } } = req;
        if (!firstName || !lastName) { throw createError('parametros insuficientes', 500); }
        const user = Services.createUser(firstName, lastName);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).send(error.data || error);
    }
};

const deleteUser = (req, res) => {
    try {
        const { params: { id } } = req;
        if (!id) { throw createError('parametros insuficientes', 500); }
        const deleted = Services.deleteUser(Number(id));
        res.status(200).send(deleted);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).send(error.data || error);
    }
};

const updateUser = (req, res) => {
    try {
        const { params: { id }, body: { firstName, lastName } } = req;
        if (!id) { throw createError('parametros insuficientes', 500); }
        const deleted = Services.updateUser(Number(id), String(firstName), String(lastName));
        res.status(200).send(deleted);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).send(error.data || error);
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};
