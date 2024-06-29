import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

const { eventModel } = require("@/models/event-models");

const getAllEvents = async () => {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
};

const getEventById = async (id) => {
  const event = await eventModel.findById(id).lean();
  return replaceMongoIdInObject(event);
};

const createUser = async (user) => {
  return await userModel.create(user);
};

const foundUserByCredentials = async (credential) => {
  const user = await userModel.findOne(credential).lean();
  return user;
};

export { getAllEvents, getEventById, createUser, foundUserByCredentials };
