const { Thought } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    getThoughtById({params}, res) {
        Thought.findOne({_id: params.id})
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, {new: true, runValidators: true})
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'head empty. no thoughts found.'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    postThought({body}, res) {
        Thought.create(body) 
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    },
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id:params.id })
        .then(deletedThought => {
            if(!deletedThought) {
                return res.status(404).json({ message: 'Head Empty. No thought found with this id'})
            }
            res.json(deletedThought);
        })
        .catch(err => res.json(err));
    }
}

module.exports = thoughtController;