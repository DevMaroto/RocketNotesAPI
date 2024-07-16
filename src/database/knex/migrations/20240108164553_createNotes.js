// processo de  criar a tabela
exports.up = (knex) =>
  knex.schema.createTable("notes", (table) => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("rating");
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

// processo de deletar a tabela
exports.down = (knex) => knex.schema.dropTable("notes");

// para gerar a tabela detro do banco de dados utilize o comando *npx knex migrate:latest*

// criei um script para o comando que gera a tabela no package.json

/* "scripts": {
  "start": "node ./src/server.js",
  "dev": "nodemon ./src/server.js",
  "migrate": "knex migrate:latest"
},*/

// agora é só rodar npm run migrate
