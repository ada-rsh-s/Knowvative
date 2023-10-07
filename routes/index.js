var express = require('express');
var router = express.Router();
const userHelpers = require("../helpers/userHelpers");

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get("/signin", (req, res) => {
 res.render("signin");
});
// router.post("/signin", (req, res) => {
//  userHelpers.signin(req.body).then((response) => {
//    console.log(response);
//    if (response.status) {
//      req.session = response.student;
//      req.session.loggedstudentIn = true;
//      res.redirect("/");
//    } else {
//      req.session.studentLoginErr = "Invalid Username or Password";
//      res.redirect("/login");
//    }
//  });
// });
module.exports = router;
