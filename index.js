const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({message: 'Hello, world'}));

app.listen(3030, () => console.log('App started'));
