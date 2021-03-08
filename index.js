// start your server here
const server = require("./api/server");

const port = process.env.PORT || 4000;

server.listen(port, () => {
	console.log(`Port ${port}`);
});
