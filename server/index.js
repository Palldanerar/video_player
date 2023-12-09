import express from "express"
import cors from "cors"
import mongoConnect from "./db/mongoConnect.js"
import {videoUpload} from "./middlewares/videoUpload.js"
import 'dotenv/config'
import { addVideo, getAllVideos } from "./controllers/videoController.js"
const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("WORK!")
})
app.post("/upload", videoUpload.single('video'), addVideo)
app.get("/videos", getAllVideos)

const server = () => {
    mongoConnect()
    app.listen(PORT, () => {
        console.log(`SERVER START ON ${PORT} PORT`)
    })
}

server()