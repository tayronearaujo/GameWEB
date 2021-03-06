const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 4000


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())



app.get('/', (req , res) =>{
    res.send('Api Conectada')
});


const Users = require('./routes/Users')
app.use('/users', Users)



app.listen(port, function() {
  console.log('Server is running on port: ' + port)
});

