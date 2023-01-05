//jshint esversion:6
const express = require("express");
const app = express();

const quotes = [
  "You are the shuckiest shuck faced shuck in the world!",
  "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
  "In spite of the cost of living, it's still popular.",
  "A censor is a man who knows more than he thinks you ought to.",
  "We are bits of stellar matter that got cold by accident, bits of a star gone wrong.",
  "Grief can take care of itself, but to get the full value of a joy you must have somebody to divide it with.",
  "When you have got an elephant by the hind leg, and he is trying to run away, it's best to let him run.",
  "We cannot deny the facts of nature, but we should certainly try to improve on them.",
];

app.get("/", function (req, res) {
    const length = quotes.length;
    const num = parseInt(Math.random()*1000)%length;
  res.send(`Quote of the day is: ${quotes[num]}`);
});

app.listen(5000, function () {
  console.log("server started running on port 3000");
});

