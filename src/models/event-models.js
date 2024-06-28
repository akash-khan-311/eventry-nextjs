import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true },
    details: { type: String, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String, required: true },
    interseted_ids: { required: false, type: Array},
    going_ids: { required: false, type: Array},
    swgs: { required: false, type: Array},
});

export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);
