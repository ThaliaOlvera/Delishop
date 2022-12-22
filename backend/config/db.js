require("dotenv").config();
const mongoose = require("mongoose");

const DB_URI = `mongodb+srv://ThaliaOlvera:yLZc0vMJnglAdjP4@cluster0.5qswzwr.mongodb.net/?retryWrites=true&w=majority`;

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("error DB");
        } else {
          console.log("DB conection succes");
        }
      }
    );
  };

  connect();
};
