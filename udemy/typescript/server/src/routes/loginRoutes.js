"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// imports
var express_1 = require("express");
// new middleware to require authorization
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    else {
        res.status(403);
        res.send('You are not permitted to visit this page');
    }
}
// init router
var router = (0, express_1.Router)();
exports.router = router;
// route-handler for 'login'
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n        <div>\n            <label>Email</label>\n            <input name=\"email\"/>\n        </div>\n        <div>\n            <label>Password</label>\n            <input name=\"password\" type=\"password\"/>\n        </div>\n        <button>Submit</button>\n    </form>\n    <a href=\"/protected\">Protected Page</a>\n  ");
});
// route-handler for POST / login
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'admin@theadmin.com' && password === 'AdminPassword') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
// root route-handler
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n        <div>\n          <div>You are logged in.</div>\n          <a href=\"/protected\">Protected Page</a>\n          <br/>\n          <a href=\"/logout\">Logout</a>\n        </div>\n      ");
    }
    else {
        res.send("\n        <div>\n          <div>You are not logged in.</div>\n          <a href=\"/login\">Login</a>\n        </div>\n      ");
    }
});
// route-handler for logout
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
// route-handler for the protected page
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to the protected route, logged in user!');
});
