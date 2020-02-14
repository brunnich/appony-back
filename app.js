const express 	= require('express');

const PORT 	= process.env.PORT || 3000;

const app = express();

app.get('/', function(req, res) {
	res.send("Hello");
});

// app.listen(PORT, () => console.log('Listening on', PORT));
module.exports = app;