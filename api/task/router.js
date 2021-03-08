// build your `/api/tasks` router here
const express = require("express");
const tasksLogic = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		tasksLogic.get().then((tasks) => {
			tasks.forEach((task) => {
				task.task_completed = !!task.task_completed;
			});
			res.json(tasks);
		});
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const tasks = req.body;
		const data = await tasksLogic
			.add(tasks)
			//  ?? Works on the project GET but not here.
			.then((task) => {
				task.task_completed = !!task.task_completed;
				res.status(201).json(data);
			});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
