const newsRouter = require("./news");
const siteRouter = require("./site")
const myRouter = require("./my");
const coursesRouter = require("./courses");


function route(app) {

//định nghĩa đường dẫn
    app.use('/news' , newsRouter);
    app.use('/courses' , coursesRouter);
    app.use('/my' , myRouter);
    app.use('/' , siteRouter);

      
}

module.exports = route;