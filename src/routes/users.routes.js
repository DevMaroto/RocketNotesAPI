// Criamos uma pasta com o nome de *routes* dentro da pasta *SRC* e é nela que ficará as rotas da aplicação, logo em seguida foi criado um arquivo (users.routes.js) tudo que for relacionado a rota de usuario ficará aqui)

// foi retirado do arquivo server.js a rota de usuario que agora se chama usersRoutes

// importa de express o *Router*
const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const usersAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
// Nessa rota foi foi feita com o metodo patch porque será atualizado somente o avatar
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  usersAvatarController.update
);

module.exports = usersRoutes;
