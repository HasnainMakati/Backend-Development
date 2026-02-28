import express from 'express'
import cors from 'cors'
// server se user-browser ki cookie set karne or access ke liye. server only read and remove that cookie. then perform CRUD operation
import cookieParser from 'cookie-parser'

const app = express()

// use => configuration karna & middleware set karne ke liye 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// request me jo data aayega vo body,json,url,form to uske liye kuch settings hote he..
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))  // data come from  url and url space value change to special character . extended means obj inside obj
app.use(express.static("public"))                               // public details store
app.use(cookieParser)

export { app }
