// Update counter and button style
const updateCounter = (element) => {

  const tweetMsg = $(element).html();
  const charsLeft = 140 - tweetMsg.length;
  const counter = $(element).parent().find(".counter");
  counter.html(charsLeft);

  // Store message from div into hidden textarea element
  $("#tweet-text").val(tweetMsg);

  if (charsLeft >= 0) {
    counter.css("color", "rgb(65, 65, 65)");
  } else {
    counter.css("color", "red");
  }

  // Enable/disable submit button
  const tweetBtn = $(counter).siblings("button");

  // if (charsLeft < 0 || charsLeft >= 140) {
  // toggleDisable(tweetBtn, true);
  // } else {
  toggleDisable(tweetBtn, false);
  // }

};

// Disables the button if disable is set to true, enables it otherwise.
const toggleDisable = (button, disable) => {
  if (disable) {
    button.prop("disabled", true);
    button.addClass("btn-disable");
  } else {
    button.prop("disabled", false);
    button.removeClass("btn-disable");
  }

};

$(document).ready(() => {

  // Dynamically update the counter as a user types
  $("#tweet-text-input").on("input", function() {
    updateCounter(this);
  });

});