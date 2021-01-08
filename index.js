require('dotenv').config();

const Express = require('express');
const app = Express();
const routes = require('./controllers/ExercisesController');
const cors = require('cors');

const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const db = require('./config/db');

const corsOptions = {
    origin: '*'
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(morgan('tiny'));
app.use(helmet());

app.use('/api',cors(corsOptions), routes)

app.get('/', (req, res) => {
    res.send('Welcome to FitnessAPI')
})

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})