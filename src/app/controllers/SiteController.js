const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../ulti/mongoose')

class SiteController {
    // get /
    index(req, res , next){
            Course.find({})
                .then(courses => {
                    res.render('home', {
                        courses : mutipleMongooseToObject(courses)
                    });
                })
                .catch(next)
    }
    //get /news/slug
    search(req, res){
        res.render('search')
    }
    contact(req, res){
        res.render('contact')
    }
}

module.exports = new SiteController;