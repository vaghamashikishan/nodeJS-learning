const { MongoClient } = require('mongodb');

let dbConnection;
let localUri = 'mongodb://localhost:27017/testDB';
let cloudUri = 'mongodb+srv://kishan:i_am_inevitable@meanpractice.cytcz1t.mongodb.net/?retryWrites=true&w=majority';
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(cloudUri)
            .then((client) => {
                dbConnection = client.db();
                return cb();
            })
            .catch(err => {
                console.log(err);
                return cb(err);
            })
    },
    getDb: () => dbConnection
}