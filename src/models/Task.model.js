import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: String,
    done: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
    }
)

export default model('Task', taskSchema)