const express = require('express')
const app = express();
const history = require('connect-history-api-fallback')
require('dotenv').config();

// so that `vue-router` could work
// basically only serves `index.html`
app.use(history());

// makes /public available to client
app.use(express.static('public'));

// app.get('/itemsss', (req, res) => {
//   console.log(req)
//   res.send({info: 'here is your JSON'})
// });

// Prints a log once the server starts listening
app.listen(process.env.DEFAULT_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.DEFAULT_PORT}/`);
});