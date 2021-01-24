const { Router } = require('express');
const router = Router();

const {
    Users
} = require('../services');


router.post('/user', Users.createUser);
router.get('/users', Users.getUsers);
router.get('/user/:id', Users.getUserById);
router.delete('/user/:id', Users.deleteUser);
router.put('/user/:id', Users.updateUser);

module.exports = router;
