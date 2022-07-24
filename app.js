import express  from "express";
import * as dotenv from "dotenv";

dotenv.config()

const port = process.env.PORT || 3000;
const app = express()

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

app.use(express.json())