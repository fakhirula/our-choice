import dotenv from "dotenv";

import { Sequelize } from "sequelize";

dotenv.config()

const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});
 
export default db;