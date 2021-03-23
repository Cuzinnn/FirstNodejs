var express = require('express');
var router = express.Router();

const myController = require('../app/controllers/MyController')

// newsController.index
router.get('/stored/courses', myController.storedCourses);





module.exports = router;