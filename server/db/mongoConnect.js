import mongoose from "mongoose";

const mongoConnect = async () => {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('MONGO CONNECT!')
        }).catch((err) => {
            console.log(err)
        })
}

export default mongoConnect