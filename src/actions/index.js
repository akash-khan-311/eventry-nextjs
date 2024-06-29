"use server";

const { createUser, foundUserByCredentials } = require("@/db/queries");
const { redirect } = require("next/navigation");

const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  console.log({ user, formData });
  const created = await createUser(user);
  redirect("/login");
};

const performLogin = async (formData) => {
  const credential = {};
  credential.email = formData.get("email");
  credential.password = formData.get("password");

  const found = await foundUserByCredentials(credential);

  if (found) {
    redirect("/");
  } else {
    throw new Error(`user with email ${formData.get("email")} not found`);
  }
};

export { registerUser, performLogin };
