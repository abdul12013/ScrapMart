
import express from  'express'
import {ConnectCloudinary} from './config/cloudinary.js'
import {userRouter} from  './routes/Authentication.js'
import http from 'http'
import {Server} from 'socket.io'
import {config} from 'dotenv'
import { setSocketInstance } from './config/socketServer.js'


import cors from 'cors'
import { ConnectDB } from './config/mongoDB.js'
import { Registor ,otpVerification} from './controller/userController.js'
import scrapRouter from './routes/scrapRoute.js'
import { disconnect } from 'process'
import { ioInstance } from './controller/scrapController.js'



const app=express()
const server =http.createServer(app)

const io=new Server(server,{
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
})

ioInstance(io)


config()
ConnectCloudinary()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/user',userRouter)
app.use('/scrap',scrapRouter)


ConnectDB()
// creating the connection 

console.log(process.env.MONGO_URL)
server.get('/',(req,res)=>{
    res.json('landing page is here ')
})

server.listen(3000,()=>{
    console.log('http://localhost:3000')
})
