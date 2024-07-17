const express = require("express");
const itemModel = require("../models/item");

const router = express.Router();
//DATABASE

let database = [];
let id = 100;

//REST API

router.get("/shopping",function(req,res) {
	itemModel.find().then(function(items) {
		return res.status(200).json(items);
	}).catch(function(err) {
		console.log("Failed finding items, Reason",err);
		return res.status(500).json({"Message":"Internal server error"});
	})
})

router.post("/shopping",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad request"})
	}
	if(!req.body.type) {
		return res.status(400).json({"Message":"Bad request"})
	}
	let item = new itemModel({
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	})
	item.save().then(function(item) {
		return res.status(201).json(item);
	}).catch(function(err) {
		console.log("Failed to add new item, Reason",err);
		return res.status(500).json({"Message":"Internal server error"});
	})
})

router.delete("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	let tempDatabase = database.filter(item => item.id !== tempId);
	database = tempDatabase;
	return res.status(200).json({"Message":"Success"});
})

router.put("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	let item = {
		type:req.body.type,
		count:req.body.count,
		price:req.body.price,
		id:tempId
	}
	for(let i=0;i<database.length;i++) {
		if(database[i].id === tempId) {
			database.splice(i,1,item);
			return res.status(200).json({"Message":"Success"})
		}
	}
	return res.status(404).json({"Message":"Not Found"});
})

module.exports = router;