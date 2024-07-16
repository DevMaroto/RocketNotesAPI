// dentro de routes foi criado um arquivo index.js para organizar  as importações das rotas quando ela crescer, para não ficar poluido (com codigos) no arquivo server.js
// reunir todas as rotas da aplicação, todos os grupos de rotas que vão estar separadas por arquivos

// importar de express *Router*
const { Router } = require("express");

// importar do arquivo users.routes.js *./users.routes*
const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

// exportar *routes* para que possamos usar no arquivo server
module.exports = routes;
