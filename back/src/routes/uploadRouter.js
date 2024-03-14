const { Router } = require("express");
const router = Router();
const uploadHandler = require("../handlers/uploadHandler");

router.route("/").post(uploadHandler);
// router.post("/",uploadHandler);
module.exports = router;
