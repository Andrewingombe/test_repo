const express = require('express');
const { ppid } = require('process');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello form the home route');
})

app.listen(3000, () => console.log(`listening on port 3000`));