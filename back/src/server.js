require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json({ limit: '10mb' }));
// alternatively:
// server.use(express.json({ limit: '10mb' }));
// server.use(express.urlencoded({ limit: '10mb', extended:true}));

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
