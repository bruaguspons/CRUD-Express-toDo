import express from "express"
import { connect } from "mongoose";
import router from "./routes/index.routes.js";


const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(router)

// connection to DataBase
const PORT = 4000
const MONGODB_URL = 'mongodb://localhost:27017/toDo-App'
connect(MONGODB_URL)
.then(() => app.listen(PORT, () => console.log(`server on port: ${PORT}`)))
.catch(err => console.log(err))
