const { Router } = require('express');
const router = Router();
const  swaggerUi  =  require ( 'swagger-ui-express' )
const  swaggerFile  =  require ( '../../swagger/swagger_output.json' )

const {
    Users
} = require('../services');

router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));

router.post('/user', Users.createUser);
router.get('/users', Users.getUsers);
router.get('/user/:id', Users.getUserById);
router.delete('/user/:id', Users.deleteUser);
router.put('/user/:id', Users.updateUser);

module.exports = router;
