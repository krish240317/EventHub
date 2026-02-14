import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app=express();

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({extended:true,limit:"16kb"}));

app.use(express.static("public"));
app.use(cookieParser());  //to access and set user browser cookies

//Declare Routes 
app.use("/api/v1/auth",)

export {app}