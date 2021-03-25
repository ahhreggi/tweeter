// Escapes unsafe characters to prevent cross-site scripting
const escape = function(str) {

  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;

};

// Update counter and button style
const updateCounter = (element) => {

  const tweetMsg = escape($(element).text());
  const charsLeft = 140 - tweetMsg.length;
  const counter = $(element).parent().find(".counter");
  counter.text(charsLeft);

  // Store message from div into hidden textarea element
  const hiddenField = $("#tweet-text");
  hiddenField.val(tweetMsg);

  const tweetBtn = $(counter).siblings().find("button");
  const errorMsg = tweetBtn.siblings(".error");

  // If the message is valid, enable submit button and hide errors
  if (charsLeft >= 0 && charsLeft <= 140) {
    counter.css("color", "rgb(65, 65, 65)");
    toggleDisable(tweetBtn, false);
    errorMsg.css("visibility", "hidden");
  // If the message is empty or too long, disable submit button
  } else {
    counter.css("color", "red");
    toggleDisable(tweetBtn, true);
    // If the message is too long, show error
    if (charsLeft < 0) {
      errorMsg.css("visibility", "visible");
    }
  }

  // Ensure that input fields are clear when all text is removed
  if (charsLeft >= 140) {
    $(element).html("");
    hiddenField.val("");
  }

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