const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Express is working! Ronin Cabusao')
});

app.listen(port, () => {
    console.log(`Server is listening to port http://localhost:${port}`);
});