const express = require("express");
const dotenv = require("dotenv");
const mongoUtil = require("./mongoUtil");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(cors())

const port = process.env.PORT || 3000;
const prefix = process.env.PREFIX;

app.use(bodyParser.json());

mongoUtil.connectToServer(function (err) {
  if (err) {
    console.log(err);
  } else {
    const userRouter = require("./modules/users/users.routes");
    const authRouter = require("./modules/auth/auth.routes");

    app.use(`${prefix}/auth`, authRouter);
    app.use(`${prefix}/users`, userRouter);


    console.log(`Server running on port ${port}`);
    app.listen(port, () => {});
  }
});
