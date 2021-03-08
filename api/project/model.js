// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
	find,
	add,
};

function find() {
	return db("projects");
}

function add(projects) {
	return db("projects")
		.insert(projects)
		.then(([id]) => {
			return db("projects").where("id", id).first();
		});
}
