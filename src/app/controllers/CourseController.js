const Course = require('../models/Course')
const { mongooseToObject } = require('../../ulti/mongoose')


class CourseController {

    //get /courses/:slug
    show(req, res , next){
        // res.send('detail - ' + req.params.id);
        Course.findById(req.params.id)
            .then(course =>{
                res.render('courses/show' , {course: mongooseToObject(course)});
            })
            .catch(next);
    }

    //[get] courses/create 
    create(req, res , next){
        res.render('courses/create');
        
    }

    //[post] courses/ctore 
    store(req, res , next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(()=> res.redirect(`/courses/${course._id}`))
            .catch(error =>{
                log.error(error);
            })

        
    }
    
}

module.exports = new CourseController;