import * as dotenv from "dotenv";
import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const NODE_ENV=process.env.NODE_ENV || "dev"

sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + `/${NODE_ENV}-database.db`
const Database = new sqlite3.Database(filePath)

export default Database

