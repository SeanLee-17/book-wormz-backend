const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_CONNECTION || "mongodb://127.0.0.1:27017/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
