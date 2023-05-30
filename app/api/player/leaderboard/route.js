const mongoose = require("mongoose");

export async function GET(req) {
  try {
    //Mongo connection error handler
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //Get data

    const collection = mongoose.connection.db.collection("metas");

    let cursor = collection.find({});

    let data = await cursor.toArray();

    // Disconnect from MongoDB
    await mongoose.disconnect();

    return new Response(JSON.stringify(data[0]));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal error" }));
  }
}
