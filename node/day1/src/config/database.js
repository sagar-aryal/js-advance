const mongoose = require("mongoose");
const { MONGODB_URI } = require("./secrets");

const connectMongo = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(MONGODB_URI, (err) => {
      if (err) {
        reject(err);
      }
    });
    resolve();
  });

module.exports = { connectMongo };
