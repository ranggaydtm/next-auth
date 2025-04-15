/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from "dotenv";
import { Pool, QueryResultRow } from "pg";

dotenv.config();

// Create a PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 40, // equivalent to connectionLimit
});

// Helper function to execute SQL queries
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<T[]> {
  const client = await pool.connect();
  try {
    const res = await client.query<T>(text, params);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    client.release();
  }
}

export default pool;
