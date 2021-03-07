const router = require('express').Router();
const {
    getAllUsers,
    getUserbyId,
    postUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(postUser)

// router
//     .route('/:id')
//     .get(getUserbyId)
//     .put(updateUser)
//     .delete(deleteUser)

module.exports = router;