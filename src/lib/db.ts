import mongoose from "mongoose";

const { user, password } = process.env;
export const connectionStr =
  "mongodb://" +
  user +
  ":" +
  password +
  "@ac-jur1gay-shard-00-00.iqpdnnm.mongodb.net:27017,ac-jur1gay-shard-00-01.iqpdnnm.mongodb.net:27017,ac-jur1gay-shard-00-02.iqpdnnm.mongodb.net:27017/resturent?ssl=true&replicaSet=atlas-ozzz0c-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// resturent;

// let cachedConnection: any = null;

async function dbConnect() {
  // if (cachedConnection) {
  //   console.log("Using existing MongoDB connection");
  //   return cachedConnection;
  // }

  try {
    const connection = await mongoose.connect(connectionStr);
    console.log("Connected to MongoDB successfully");
    // cachedConnection = connection;
    // return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection error");
  }
}

export default dbConnect;
