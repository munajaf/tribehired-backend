const express = require('express');
const app = express();
const port = 3000;

const { fetchTopPost } = require('./api/controller/post')
const { filterComment } = require('./api/controller/comment')

const { topPost, filter } = require("./api/provider/endpoint");

app.get(topPost, fetchTopPost);
app.get(filter, filterComment);

app.listen(port, () => console.log(`listening on port ${port}`))