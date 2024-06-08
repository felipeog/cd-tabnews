import database from "infra/database.js";

export default async function status(_request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log({ result });

  response.status(200).json({
    message: "àãáâç",
  });
}
