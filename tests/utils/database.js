import database from "infra/database.js";

export const cleanDatabase = async () => {
  await database.query({
    text: "drop schema public cascade; create schema public;",
  });
};
