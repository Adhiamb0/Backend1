const { MongoClient, ObjectId} = require("mongodb");
const connectionURL = "mongodb+srv://RoseOginga:33243484@cluster0.w5eaqbg.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "task-manager";

//MongoClient.connect(connectionURL, (error, client) => {
    //if (error) {
    //    return console.log("unable to connect to database")
    //}
    const db = client.db(databaseName);
    db.collection("users")
    .find({age:34})
    .toArray((error, users) => {
        console.log(users);
    })
        
    
    