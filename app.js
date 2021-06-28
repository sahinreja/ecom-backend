const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./products/p.json')
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());


app.get('/' , (req,res)=>{
    res.send(data)
    // res.send('joty')
})

app.use('/api' , require('./routes/api'))

app.listen(port ,()=>{
    console.log(`Server on port ${port}`);
})



