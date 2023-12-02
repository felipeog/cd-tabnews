import { Client } from "pg";

const client = new Client({
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
});

async function query(queryObject) {
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query,
};
