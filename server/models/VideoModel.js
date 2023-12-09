import { Schema, model } from "mongoose"

const VideoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    videoUrl: {
        type: String,
        trim: true,
        required: true,
    },
    filename: {
        type: String,
        trim: true,
    }
},
{
    timestamps: true
})

export default model("Videos", VideoSchema)