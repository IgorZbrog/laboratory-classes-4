const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController');

router.get("/", logoutController.getLogoutView);
router.get("/kill", logoutController.killApplication);

module.exports = router;
