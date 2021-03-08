const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    postThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

const {
    postReaction,
    deleteReaction
} = require('../../controllers/reaction-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(postThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:id/reactions')
    .post(postReaction)

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;