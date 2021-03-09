const {Schema, model, Types} = require('mongoose');
const formatDate = require('../utils/formatDate');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Reaction text is required',
            trim: true
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => formatDate(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: Schema.Types.String,
            required: 'Thought must have text',
            min: 1,
            max: 280
        },
        username: {
            type: Schema.Types.String,
            required: 'Thought must have username'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => formatDate(createdAtVal)

        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;