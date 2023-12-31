//import json server library
const jsonServer=require('json-server')
//import cors
const cors=require('cors')

//to create new server
const videoServer=jsonServer.create()

//create a router to connect the json file
const router=jsonServer.router('data.json')


//create middleware (json to js)
const middleware=jsonServer.defaults()


//connect with client
videoServer.use(cors())
videoServer.use(middleware)
videoServer.use(router)

//to run this server(and to give another port)

const PORT=4000
videoServer.listen(PORT,()=>{console.log(`____ video server started at port.. (${PORT})____`);})