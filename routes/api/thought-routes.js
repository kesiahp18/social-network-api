const router = require('express').Router();
const {
    getAllThoughts,
    // getThoughtById,
    postThought,
    // updateThought,
    // deleteThought
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(postThought)

module.exports = router;