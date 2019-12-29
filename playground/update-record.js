//Update the record of users collection which has name example to the age 7

const {
    MongoClient
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApi", (err, client) => {
    if (err) {
        console.log("unable to connect to the DB server");
    }
    console.log("Connected to the DB server");
    const db = client.db("TodoApi");
    db.collection("Users").findOneAndUpdate({
        name: "example"
    }, {
        $set: {
            age: 29
        }
    }, (err, result) => {
        if (err) {
            console.log("Updated the records");
        } else {
            console.log(result);
        }
    });
    client.close();
});