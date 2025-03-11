const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const result = 'Hello, World!';  // Define the result
  res.send(result);
});

app.listen(3000, () => console.log('Server running on port 3000'));