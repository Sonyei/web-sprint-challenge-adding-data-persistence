// build your `/api/projects` router here
const express = require("express");
const projectLogic = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		projectLogic.get().then((project) => {
			res.json(project);
		});
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const projects = req.body;
		const data = await projectLogic.add(projects);
		res.status(200).json(data);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
