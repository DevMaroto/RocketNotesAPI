const path = require("path");
const multer = require("multer");
const crypto = require("crypto");
// local aonde a imagem chega
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
// Local aonde a imagem irá ficar
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      //gera um hash aleatorio 
      const fileHash = crypto.randomBytes(10).toString("hex");
      //combinando a hash com o nome do arquivo(o motivo disso é que se tiver uma arquivo com o mesmo nome ele não irá sobrescrever)
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};

module.exports = {
  MULTER,
  TMP_FOLDER,
  UPLOADS_FOLDER,
};
