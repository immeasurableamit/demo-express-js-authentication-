const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("./routers/user.route"));

// global error handler
app.use(errorHandler);

// start server
const port =
    process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 8000;
const server = app.listen(port, function () {
    console.log("Server listening on port " + port);
});

// require("dotenv").config(); // SUPPORT .ENV FILES
// const express = require("express"); // BRING IN EXPRESS
// const app = express(); // INITILIZE APP

// const mongoose = require("mongoose"); // INITIALIZE MONGOES
// const url = process.env.DATABASE_URL;

// const http = require("http"); // CORE MODULE, USED TO CREATE THE HTTP SERVER
// const server = http.createServer(app); // CREATE HTTP SERVER USING APP
// const port = process.env.PORT || "3000"; // INITIALIZE DEFAULT PORT OR PORT FROM ENVIRONMENT VARIABLE

// const users = require("./routers/user.route"); // USERS ROUTES

// mongoose.connect(url, { useNewUrlParser: true });

// const con = mongoose.connection;

// con.on("open", function () {
//     console.log("connected...");
// });

// // ROUTES
// users(app); // USERS ROUTES

// // SET THE PORT
// app.set("port", port);
// // LISTEN ON SPECIFIED PORT
// server.listen(port);

// // LOG WHICH PORT THE SERVER IS RUNNING ON
// console.log("Server listening on port " + port);

// // ERROR HANDLER
// app.use((err, req, res, next) => {
//     console.log(err);
//     res.status(err.status || 500).send(err.stack);
// });

// // CORS
// app.all("/*", (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
