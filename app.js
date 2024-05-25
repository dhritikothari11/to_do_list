const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items=["book","read","ruun"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };


  var day = today.toLocaleDateString("en-us", options);
  res.render("list",{kindofday:day, listItems:items})
});

  app.post("/", function (req, res) {
    var item = req.body.item;
   items.push(item)
    
    res.redirect("/");

  });
  //   var currentDay = today.getDay();
  //   var day = "";

  //   switch (currentDay) {
  //     case 0:
  //       day = "sunday";
  //       break;

  //     case 1:
  //       day = "monday";
  //       break;

  //     case 2:
  //       day = "tuesday";
  //       break;

  //     case 3:
  //       day = "wednesday";
  //       break;

  //     case 4:
  //       day = "thrus";
  //       break;

  //     case 5:
  //       day = "friday";
  //       break;
  //     case 6:
  //       day = "saturday";
  //       break;

  //     default:
  //       console.log("eroor cureet day is" + currentDay);
  //   }


app.listen(3000, function () {
  console.log("the server is running at port 3000");
});
