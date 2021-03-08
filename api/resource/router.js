// build your `/api/resources` router here

const express = require("express");
const resourceLogic = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		resourceLogic.get().then((resources) => {
			resources.forEach((resource) => {
				resource.task_completed = !!resource.task_completed;
			});
			res.json(resources);
		});
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const resources = req.body;
		const data = await resourceLogic.add(resources);
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
