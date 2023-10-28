const express = require('express');
const app = express();
const port=3000;
app.get('/',(request,response)=>{
response.send("hello habibi");
});
app.listen(port, ()=>{
    console.log(`server is on port ${port}`);
});
// write the code here to setup the server and get it to run on PORT 3000
// host on heroku   