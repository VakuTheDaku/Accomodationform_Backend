const express=require('express')
const app = express()
const router = require("./routes/main")

const cors = require("cors");
const bodyParser = require('body-parser');
const db = require("./models");
app.use(bodyParser.json())

const corsOptions ={
   origin:['http://localhost:3001', 'https://62cb80bfd203bd2affb204de--friendly-rolypoly-7fa8e8.netlify.app/'],
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use("/",router)
db.sequelize.sync().then(req =>{ 
app.listen(process.env.PORT||3000)})