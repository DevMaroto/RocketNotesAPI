const { verify } = require("jsonwebtoken");
const AppError = require("../util/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;
  console.log(authHeader)
  if (!authHeader) {
    throw new AppError("JSON Web Token não encontrado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const {sub: user_id} = verify(token, authConfig.jwt.secret);

    request.user = {
      id: Number(user_id),
    };
    return next();
  } catch {
    throw new AppError("JSON Web Token invalido", 401);
  }
}
module.exports = ensureAuthenticated;
