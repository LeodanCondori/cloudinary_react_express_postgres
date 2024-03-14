const { Router } = require("express");
const router = Router();
const deleteHandler = require("../handlers/deleteHandler");

router.route("/:dataId").post(deleteHandler);
// router.post("/",deleteHandler);
module.exports = router;
