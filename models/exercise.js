const mongoose = require('mongoose');
    
const { Schema } = mongoose;

const exercise = new Schema({
    title:  String, // String is shorthand for {type: String}
    description: String,
    img:   String,
    leftColor: String,
    rightColor: String    
});

const Exercise = mongoose.model('Exercise', exercise);

module.exports = Exercise;