const mongoose = require('mongoose');

const URI = 'mongodb+srv://lrmendoza:luisroberto@cluster0-8xh0p.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser:true,
    useCreateIndex:true
});
const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB is connected')
});