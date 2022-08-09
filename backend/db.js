const mongoose = require("mongoose");

const url =
"mongodb://Sarthak:NZKhZZ2sR2YqshUy@cluster0-shard-00-00.jt5yb.mongodb.net:27017,cluster0-shard-00-01.jt5yb.mongodb.net:27017,cluster0-shard-00-02.jt5yb.mongodb.net:27017/quora-clone-mern?ssl=true&replicaSet=atlas-h6f7vu-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};