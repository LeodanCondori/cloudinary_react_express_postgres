const { Router } = require("express");
const router = Router();
const uploadRouter = require("./uploadRouter");
const deleteRouter = require("./deleteRouter");

router.use("/upload", uploadRouter);
router.use("/delete", deleteRouter);

module.exports = router;
