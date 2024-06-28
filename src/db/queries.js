import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

const { eventModel } = require("@/models/event-models");

const getAllEvents = async () => {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
};

const getEventById = async (id) => {
  const event = await eventModel.findById(id).lean();
  return replaceMongoIdInObject(event);
};

export { getAllEvents , getEventById};
