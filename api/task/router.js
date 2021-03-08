// build your `/api/tasks` router here
const express = require("express");
const dbConfig = require("../../data/dbConfig");
const tasksLogic = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		tasksLogic.get().then((tasks) => {
			res.json(tasks);
		});
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const tasks = req.body;
		const data = await tasksLogic.add(tasks);
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
