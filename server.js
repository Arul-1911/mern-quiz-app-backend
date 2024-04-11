import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

//import database connection file
import connect from './database/connection.js'
const app = express();

//middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
config()

//application port
const port = process.env.PORT || 8080;


// routes
app.use('/api', router);

app.get('/', (req,res) => {
   try {
      res.json('get request')
   } catch (error) {
   res.json(error)
   }
})

//calling  database connection and start the server after the succesfull connection to db

async function startServer() {
  try {
    await connect(); // database connection
    // Port running
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

startServer();

