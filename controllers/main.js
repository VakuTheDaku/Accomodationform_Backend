const { User } = require('../models')

const maincontroller=(req,res)=>{
    res.send("Its working")
}
const storingdata=(req, res) => {
    console.log(req.body)
    User.create({
        name: req.body.name,
        clg_name: req.body.college_name,
        gender: req.body.gender,
        contact_number: req.body.phone,
        registered_event: req.body.events,
        entry_date: req.body.startdate,
        exit_date: req.body.exitdate
    }).then(()=>res.send(JSON.stringify({"status": 200, "error": null, "response": "done"}))).catch(err=>console.log(err))
    }
module.exports={main:maincontroller,storedta:storingdata}