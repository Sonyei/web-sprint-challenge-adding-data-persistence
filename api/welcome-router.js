const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		res.json({
			message: "Welcome. Server spun up and listening.",
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
