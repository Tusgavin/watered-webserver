const minio = require('minio');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../../.env") });

const minioClient = new minio.Client({
   endPoint: process.env.MINIO_HOST,
   port: process.env.MINIO_PORT,
   useSSL: false,
   accessKey: process.env.MINIO_USER,
   secretKey: process.env.MINIO_PASS
});

module.exports = minioClient;
