import mongoose from "mongoose";


export async function connect() {

  try {
    mongoose.connect("mongodb+srv://ganeshbharti:ganeshbharti2002@loginpageporject.dhacv3r.mongodb.net/")
    const connection = mongoose.connection;
    
    connection.once("connected", () => {
      console.log("Connected to the database");
    })

    connection.on("error", (error) => {
      console.log("Error connecting to the database");
      console.log(error);
    })
    
  } catch (error) {
    console.log("Error connecting to the database")
    console.log(error);
  }
}

