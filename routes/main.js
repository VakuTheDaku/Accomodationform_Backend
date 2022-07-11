const express= require("express")
const router=express.Router()
const controller=require("../controllers/main")
router.get("/",controller.main)
router.post("/store-data", controller.storedta)
module.exports= router