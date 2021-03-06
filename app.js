import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connect_DB from './db/connect_db.js'
import web from './router/web.js'
import home from './router/home.js';
import { join } from 'path';
const app= express();
const port= process.env.PORT||3000;

// url string of mongodb
// mongodb+srv://baba:<baba_123>@cluster0.ejysagl.mongodb.net/?retryWrites=true&w=majority
const data_url=process.env.data_url;

// middleware
app.use('/',express.static(join(process.cwd(),"public")));
// css will not hit so we can rearrange the root below
app.use('/edit', express.static(join(process.cwd(),"public")));
//  for using form req.body we have to use the middleware urlEncodade//
app.use(express.urlencoded({extended:false}));

// view engine
app.set('views','./views');
app.set('view engine', 'ejs');

// creat connection to db
connect_DB(data_url);


// routes
app.use('/village', web);
app.use('/' , home);



app.listen(port,()=>{
    console.log(`the server is running at http://localhost:${port}`);
    
})