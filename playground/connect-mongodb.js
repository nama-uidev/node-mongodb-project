//const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApi", (err, client) => {
    if (err) {
        console.log("unable to connect to the DB server");
    }
    console.log("Connected to the DB server");
    const db = client.db("TodoApi");
    db.collection("Users").insertOne({
        name: "Nama",
        age: 27
    }, (err, result) => {
        if (err) {
            console.log("Unable to insert records");
        } else {
            var res = JSON.stringify(result.ops, undefined, 2);
            console.log(res);
        }
    });
    client.close();
});