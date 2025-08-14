import database from "/infra/database/database.js";

async function status(_request, response) {
  const updated_at = new Date().toISOString("pt-br");

  const databaseVersionResult = await database.query("SHOW server_version;");

  const databaseVersion = parseInt(
    databaseVersionResult.rows[0].server_version,
  );

  const databaseMaxConectionsResult = await database.query(
    "SHOW max_connections;",
  );

  const databaseMaxConcectionsValue = parseInt(
    databaseMaxConectionsResult.rows[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;

  const databaseOpenedConnetionsResult = await database.query({
    text: "SELECT COUNT(*) AS opened_connections FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const databaseOpenedConnetionsValue = parseInt(
    databaseOpenedConnetionsResult.rows[0].opened_connections,
  );

  response.status(200).json({
    updated_at,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: databaseMaxConcectionsValue,
        opened_connections: databaseOpenedConnetionsValue,
      },
    },
  });
}

export default status;
