const {
    MongoClient
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApi", (err, client) => {
    if (err) {
        console.log("Unable to connect");
    } else {
        console.log("connected");
        var db = client.db("TodoApi");
    }
    db.collection("Users").find({}).toArray().then((docs) => {
        var docs = JSON.stringify(docs, undefined, 2);
        console.log(docs);
    });

});