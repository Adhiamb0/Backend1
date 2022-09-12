const { MongoClient, ObjectId} = require("mongodb");
const connectionURL = "mongodb+srv://RoseOginga:33243484@cluster0.w5eaqbg.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log("unable to connect to database")
    }
    const db = client.db(databaseName);
    db.collection("users").findOne(
        { _id: new ObjectId("63109f6bf30b3b46d788efa7") },
        (error, user) => {
        if (error) {
         return console.log("unable to acess user");
        }
        console.log(user);
        }
    );
    })   