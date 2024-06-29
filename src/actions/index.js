"use server";

const { createUser } = require("@/db/queries");
const { redirect } = require("next/navigation");

const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  console.log({ user, formData });
  const created = await createUser(user);
  redirect("/login");
};

export { registerUser };
