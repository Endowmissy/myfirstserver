const express = require('express');

const app = express();

app.get('/hacksultan', (req,res) => {
    res.send('Welcome to Ayomikun Emmanuel official page. I am a back-end developer');
});

app.listen(5000,() => console.log('Application started on port 5000'));