// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
	get,
	add,
};

function get() {
	return db("projects");
}

function add(projects) {
	return db("projects")
		.insert(projects)
		.then(([id]) => {
			return db("projects").where("project_id", id).first();
		});
}
