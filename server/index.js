import express from "express"
import cors from "cors"
import mongoConnect from "./db/mongoConnect.js"
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

const server = () => {
    mongoConnect()
    app.listen(PORT, () => {
        console.log(`SERVER START ON ${PORT} PORT`)
    })
}

server()