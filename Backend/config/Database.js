import { Sequelize } from "sequelize";

const db = new Sequelize("frendlee", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
