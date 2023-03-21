const express = require("express");
const router = express.Router();

const iotSwitch = require("../controllers/iotSwitch");
const middleware = require("../middlewares/auth");

router.get("/switch", iotSwitch.switchToggle);

module.exports = router;
