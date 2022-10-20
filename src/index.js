import express from "express"
import { connect } from "mongoose";
import router from "./routes/index.routes.js";
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();

// set the view engine to ejs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'public/views'))

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use(express.static(__dirname + '/public'));
app.use(router)

// connection to DataBase
const PORT = 4000
const MONGODB_URL = 'mongodb://localhost:27017/toDo-App'
connect(MONGODB_URL)
.then(() => app.listen(PORT, () => console.log(`server on port: ${PORT}`)))
.catch(err => console.log(err))
