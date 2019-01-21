import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const User = new Schema({
    username: {
        type: String,
        required: 'Enter a first name'
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: 'Enter a first name'
    },

    created_date: {
        type: Date,
        default: Date.now
    }
});