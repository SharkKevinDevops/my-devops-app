const express = require('express');
const app = express();

app.get('/', (req, res) => result.send('Hello World!'));

app.listen(3000, () => console.log('Server running on port 3000'));