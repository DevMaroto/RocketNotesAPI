require("dotenv/config");
require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");

const uploadConfig = require("../src/configs/upload");

const AppError = require("./util/AppError");
const express = require("express");
const cors = require("cors");

// importar a routes
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

// e depois de importar não se esqueça de usar ela
app.use(routes);

// aqui a gente esta vendo se é o error do cliente ou do servidor
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// por padrão quando não utilizamos o nome do arquivo ele busca por um arquivo chamado de index (linha de codigo n°4)
