const { Thought, User } = require('../models');

const reactionController = {
    
    postReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'no thought found'});
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.status(500).json(err))
    },

    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            { $pull: { reactions: { _id: params.reactionId } } },
            { new: true }
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'no thought found'});
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.status(500).json(err))
    }

}

module.exports = reactionController;