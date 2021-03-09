const { User } = require('../models')

const friendController = {
    addFriend ({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData => {
            res.json(dbUserData)
        })
        .catch(err => res.status(500).json(err))
    },

    deleteFriend ({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData => {
            res.json(dbUserData)
        })
        .catch(err => res.status(500).json(err))
    }
}

module.exports = friendController