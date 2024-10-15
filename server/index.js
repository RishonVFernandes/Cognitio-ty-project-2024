const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
require('dotenv').config();
const PORT = process.env.PORT | 3000;

//middleware

app.use(cors());
app.use(express.json());

// routes

app.get('/api', (req, res) => {
    res.json({message: 'hello from rishons server'});
    console.log('hit');
})

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, (err) => {
            if(err){
                console.log(err);
            }
            console.log(`listening to port ${PORT}`);
        })
    }
    catch(error){
        console.log(error);
    }
}


start();