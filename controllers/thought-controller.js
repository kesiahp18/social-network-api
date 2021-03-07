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
    postThought({body}, res) {
        Thought.create(body) 
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    },
}

module.exports = thoughtController;