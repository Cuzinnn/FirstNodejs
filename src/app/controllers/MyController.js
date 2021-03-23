const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../ulti/mongoose')


class MyController {

    //[get] my/stored/courses
    storedCourses(req, res , next){
        Course.find({})
            .then(courses =>res.render('my/stored-courses',{
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
        
    }

    
}

module.exports = new MyController();