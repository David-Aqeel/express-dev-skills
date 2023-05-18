// When making new routes, always use const and not var
var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// All actual paths start with "/todos"

// GET /skills
router.get('/', skillsCtrl.index);
//router.get('/:id', skillsCtrl.show);

// Remove the object from around the router variable
module.exports = router
   // show;
