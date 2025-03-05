import mongoose from "mongoose";

// making connection to our database:
const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected")
    });

    await mongoose.connect(`${process.env.DB_URL}/Incruiter`)
}

export default connectDB;