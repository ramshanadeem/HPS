const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const RegRoute = require('./routes/api/RegApi.js')
const WelfareRoute = require('./routes/api/WelfareApi.js')
const ServiceRoute = require('./routes/api/ServiceApi.js')
const userRoute = require('./routes/api/User.js')
const RegistrationRoute = require('./routes/api/Rgistration')

const dbconnect = require('./config/db.js')

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json({ limit: '50mb' }));
/// databse connection
dbconnect();
const PORT = 4000;
app.listen(PORT, (req, res) => {
    console.log(`server is running at ${PORT}`)
});


app.get('/', (req, res) => {
    res.send('<h1>Server is running</h1>')
})
///Routes

app.use('/api/Regusers', RegRoute)
app.use('/api/Welfareuser', WelfareRoute)
app.use('/api/Serviceuser', ServiceRoute)
app.use('/api/users', userRoute)
app.use('/api/Registration', RegistrationRoute)
app.use('/api/users/login', userRoute)