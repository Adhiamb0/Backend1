//const mongodb = require("mongodb");
//const MongoClient = mongodb.MongoClient;
const { MongoClient, objectId} = require("mongodb");
const connectionURL = "mongodb+srv://RoseOginga:33243484@cluster0.w5eaqbg.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log("unable to connect to database")
    }
    const db = client.db(databaseName);

    db.collection("users").insertOne({
        name: "james",
       age: 26, 
        status:"married",
        kids: 4,
      name:"olivent",
        age: 29,
    }, 
    db.collection("users").insertMany([
       {
        name: "Mary",
        age: 25,
    },
    {
        name: "Rose",
       age: 34,
    },
    ]),
    (error, result) => {
       if (error) {
        return console.log("unable to create user");
       }
       console.log(result);
    }),

db.collection("users").findOne(
    { _id: new objectId("63109f6bf30b3b46d788efa7") },
    (error, user) => {
    if (error) {
     return console.log("unable to acess user");
    }
    console.log(user);
    }
);

