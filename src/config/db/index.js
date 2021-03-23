const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/F8-Nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('connect MongoDB successfully !');
    }catch(error){
        console.log('connect MongoDB failed !');
    }
}

module.exports = { connect };