import multer from 'multer';
import path from 'path';
import {v4 as uuidv4} from "uuid";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname === 'video') {
            const rootDir = path.dirname(file.originalname);
            cb(null, path.join(rootDir, 'public/').concat('videos'))
        }
    },
    filename: (req, file, cb) => {
        const videoExt = file.mimetype.split('/')[1]
        const id = uuidv4()
        cb(null, "video_" + id + '.' + videoExt)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'video/mp4') {
        cb(null, true)
    }else{
        cb(null, false)
    }
}
export const videoUpload = multer({storage, fileFilter})