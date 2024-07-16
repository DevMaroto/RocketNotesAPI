// serve para resolver problemas de endereço em outro sistemas (a navegação de diretorios em outros sistemas é diferente)
const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db"),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb),
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        "src",
        "database",
        "knex",
        "migrations"
      ),
    },
    useNullAsDefault: true,
  },
};

//criando a tabela createNotes com o comando  *npx knex migrate:make createNotes*
//criando a tabela createTags com o comando  *npx knex migrate:make createTags*
//criando a tabela createLinks com o comando  *npx knex migrate:make createLinks*
