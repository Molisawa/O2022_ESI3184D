const express = require("express");
const dotenv = require("dotenv");
const mongoUtil = require("./mongoUtil");
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const prefix = process.env.PREFIX;

mongoUtil.connectToServer(function (err) {
  if (err) {
    console.log(err);
  } else {
    const userRouter = require("./modules/users/users.routes");

    app.use(`${prefix}/users`, userRouter);

    console.log(`Server running on port ${port}`);
    app.listen(port, () => {});
  }
});
