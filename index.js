const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')

const connection = mysql.createConnection({
    host: 'database-2.cmwdr0ca6gea.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Impacters100%',
    database: 'reports'
})


connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });


const app = express();
app.use(bodyParser.json())


app.post('/report', async (req,res)=>{
    let data = {
        latitude,
        longitude,
        name,
        who,
        description,
        gender
        
    } = req.body;

        try {
            await connection.query('INSERT INTO Report SET ?', data, function (error, results, fields) {
               
                res.send("Inserted");
                
              });
            
        } catch (error) {
            
            res.send(error);
            
        }

    

})

app.listen(3000,()=>console.log("Listening"));