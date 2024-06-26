const mongoose = require("mongoose");
const dbConnect = async () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((e) => {
      console.log("DB connection failed");
      console.error(e);
      process.exit(1);
    });
};

module.exports = dbConnect;
