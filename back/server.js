const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'crucero'
})

app.get('/', (re, res)=> {
    return res.json("from back side");
})

app.get('/menu', (req, res)=> {
    const sql = "SELECT * FROM menu";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(5000, ()=>{
    console.log("listening");
})







// app.get("/api",(req, res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree"] })
// });

// app.listen(5000, () => console.log("La aplicación está en funcionamiento en el puerto 5000"));

