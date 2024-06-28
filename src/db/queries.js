import { replaceMongoIdInArray } from "@/utils/data-util";

const { eventModel } = require("@/models/event-models");

const getAllEvents = async () => {
    const allEvents = await eventModel.find();
    return replaceMongoIdInArray(allEvents);
};

export {getAllEvents}