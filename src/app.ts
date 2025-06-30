import dotenv  from 'dotenv'
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express()


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use("/", routes)

const port = process.env.SERVER_PORT || "3000";


app.listen(parseInt(port), () => {
    console.log(`Listening on port ${port}`);
  });