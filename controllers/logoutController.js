const { getProcessLog } = require('../utils/logger');
const { LOGOUT_LINKS } = require('../constants/navigation');

module.exports = {
    
    getLogoutView: (req, res) => {
        res.render('logout.ejs', {
            headTitle: "Shop - Logout",
            path: "/logout",
            activeLinkPath: "/logout",
            menuLinks: LOGOUT_LINKS
        });
    },

    
    killApplication: (req, res) => {
        getProcessLog();  
        process.exit();   
    }
};