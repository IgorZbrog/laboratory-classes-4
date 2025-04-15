const logoutController = require('../controllers/logoutController');
router.get("/", logoutController.getLogoutView);
router.get("/kill", logoutController.killApplication);