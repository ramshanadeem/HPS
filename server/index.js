const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const RegRoute = require('./routes/api/RegApi.js')
// const postRoute = require('./routes/api/posts.js')
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
/*
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute) */