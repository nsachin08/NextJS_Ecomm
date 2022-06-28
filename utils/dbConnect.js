import mongoose from "mongoose";

const connection = {};

async function dbConnect() {

    if(connection.isConnected){
        return;
    }

    const CONNECTION_URL =
  "mongodb+srv://sachin123:sachin123@cluster0.swrp8.mongodb.net/?retryWrites=true&w=majority";

    const db = await mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

    connection.isConnected=db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;