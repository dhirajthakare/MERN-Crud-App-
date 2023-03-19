const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const bodypar = require('body-parser');
app.use(bodypar.json());
const cors = require('cors');
app.use(cors());

const port = process.env.port || 4000;
const db = require('./server/database/dbconf');

const router = require('./server/route/route');

app.use(router)

app.listen(port , ()=>{
    console.log("localhost:"+port);
})