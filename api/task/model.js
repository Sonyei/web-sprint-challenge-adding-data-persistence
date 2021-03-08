// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
	get,
	add,
};

function get() {
	return db("tasks as t")
		.join("projects as p", "p.project_id", "t.project_id")
		.select("t.*", "p.project_name", "p.project_description");
}

function add(tasks) {
	return db("tasks")
		.insert(tasks)
		.then(([id]) => {
			return db("tasks").where("task_id", id).first();
		});
}
