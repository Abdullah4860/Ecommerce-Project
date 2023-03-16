const app=require('./app.js')

const dotenv=require('dotenv')
const mongoose=require('mongoose')

const connectDatabase=require('./config/database.js')

//Handling uncaught Exception
process.on('uncaughtException',err=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to uncaught Exception")
     process.exit(1);
})

  
//config
dotenv.config({path:'backend/config/config.env'})

//connecting to database
mongoose.set("strictQuery", true);
connectDatabase()





const server=app.listen(process.env.PORT,()=>{

    console.log(`Server is Working on http://localhost:${process.env.PORT}`)
})

//unhandled Promise Rejection

process.on('unhandledRejection',err=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to Unhandled Promise Rejection")
     server.close(()=>{
        process.exit(1);
     })
})