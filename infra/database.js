import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "postgres",
  password: "local_password",
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
