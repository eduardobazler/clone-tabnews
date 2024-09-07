const { exec } =  require("node:child_process")

const notContains = -1

function checkPostgres() {
  exec('docker exec postgres-dev pg_isready --host localhost', handleReturn)

  function handleReturn(_error, stdout, _stderr) {
    if (stdout.search('accepting connections') === notContains) {
      process.stdout.write(".")
      checkPostgres();
      return;
    }

    console.log("\nPostgres está pronto!\n")
  }

}

process.stdout.write("\n\nAguardando Postgres aceitar conexões ")
checkPostgres()
