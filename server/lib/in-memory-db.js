"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example tweets to make it less tedious to style the app initially.
// const initialTweets = require("../data-files/initial-tweets.json")
const bobRossTweets = require("../data-files/initial-tweets-bobross.json");
const db = {
  tweets: bobRossTweets
};

module.exports = db;
