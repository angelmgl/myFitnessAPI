const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONN, options, (error) => {
    if(error){
        console.log('Hubo un error ' + error);
    } else {
        console.log('DB connected!');
    }
});