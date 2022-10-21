const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'dbuser',
//     password: 's3kreee7',
//     database: 'my_db'
// })

// connection.connect()

const app = express();
app.use(bodyParser.json())


app.post('/report', (req,res)=>{
   
    const {
        latitude,
        longitude,
        name,
        who,
        description,
        gender,
        time
        
    } = req.body;

    res.json({
        latitude,
        longitude,
        name,
        who,
        description,
        gender,
        time
        
    })

    console.log({
        latitude,
        longitude,
        name,
        who,
        description,
        gender,
        time
    })

})

app.listen(3000,()=>console.log("Listening"));

