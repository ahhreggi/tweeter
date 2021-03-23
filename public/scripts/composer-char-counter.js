$(document).ready(() => {

  $("#tweet-text-input").on("input", function() {
    const tweetMsg = $(this).html();
    const charsLeft = 140 - tweetMsg.length;
    const counter = $(this).parent().find(".counter");
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
    
    if (charsLeft < 0 || charsLeft >= 140) {
      tweetBtn.prop("disabled", true);
      tweetBtn.addClass("btn-disable");
    } else {
      tweetBtn.prop("disabled", false);
      tweetBtn.removeClass("btn-disable");
    }

  });
  
});