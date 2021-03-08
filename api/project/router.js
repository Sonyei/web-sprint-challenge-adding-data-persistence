// build your `/api/projects` router here
const express = require("express");
const projectLogic = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		projectLogic.get().then((projects) => {
			projects.forEach((proj) => {
				proj.project_completed = !!proj.project_completed;
			});
			res.json(projects);
		});
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const projects = req.body;
		const data = await projectLogic.add(projects).then((project) => {
			project.project_completed = !!project.project_completed;
			res.status(201).json(data);
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
