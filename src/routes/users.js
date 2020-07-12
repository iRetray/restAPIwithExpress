const { Router } = require('express');
const { route, get } = require('../app');
const router = Router();

const { getUsers, insertUser, getUser,deleteUser, updateUser } = require('../controllers/userController')

router.route('/')
    .get(getUsers)
    .post(insertUser)

router.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .post(updateUser)

module.exports = router;