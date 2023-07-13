const express = require('express');
const app = express();
const port = 8000;
app.get('/',(req,res) => {
    res.send('hii i am LEVIN S ')
})

app.get('/data', (req, res) => {
  res.send('This my frist set up the express program using git command');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

