// é a versão do driver/ driver de conexão
const sqlite3 = require("sqlite3");
// esse é o responsavel por conectar
const sqlite = require("sqlite");
// serve para resolver problemas de endereço em outro sistemas (a navegação de diretorios em outros sistemas é diferente)
const path = require("path");


async function sqliteConnection(){
  // aqui esta abrindo uma conexão e dentro do objeto eu coloco a configuração da minha conexão(aonde eu quero salvar meu banco de dados)
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver:  sqlite3.Database
  });

  return database;
}

module.exports = sqliteConnection;