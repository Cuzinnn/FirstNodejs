const express = require('express')
const app = express()
const port = 1235
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes');

//import database

const db = require('./config/db')

// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))

//middleware su ly du lieu tu form
app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

//template engine
app.engine('hbs', handlebars({
  //định nghĩa đuôi
  extname: '.hbs',
  helpers:{
    sum :(a,b) => a+b,
  }
}));
app.set('view engine', 'hbs');
app.set('views' , path.join(__dirname,'resources\\views'))


// Routes init
route(app);

app.listen(port,()=>

  console.log(`App listening on http://localhost:${port}`)
  )
