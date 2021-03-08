// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
	get,
	add,
};

function get() {
	return db("tasks");
}

function add(tasks) {
	return db("tasks")
		.insert(tasks)
		.then(([id]) => {
			return db("tasks").where("task_id", id).first();
		});
}
