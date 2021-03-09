const router = require('express').Router();
const {
    getAllUsers,
    getUserbyId,
    postUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

const {
    addFriend,
    deleteFriend
} = require('../../controllers/friend-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(postUser)

router
    .route('/:id')
    .get(getUserbyId)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;