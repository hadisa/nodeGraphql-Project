const express = require("express");
const path = require("path");
const os = require("os");

const fs = require("fs");
const eventEmitter = require("events");


const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const f = () => {
  console.log("hello");
  var pathObj = path.parse(__filename);
  console.log(pathObj.dir);
  console.log(os.freemem());
  console.log(os.freemem());
  const files = fs.readdirSync("./");
  console.log("files ==>", files);
  fs.readdir("./", function (err, files) {
    if (err) console.log("Error");
    else console.log(files);
  });
  const emitter=new EventEmitter()
};
f();
