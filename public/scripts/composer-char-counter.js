$(document).ready(() => {

  $("#tweet-text-input").on("input", function() {
    const tweetMsg = $(this).html();
    const charsLeft = 140 - tweetMsg.length;
    const counter = $(this).parent().find(".counter");
    counter.html(charsLeft);

    // Store message in hidden textarea element
    $("#tweet-text").val(tweetMsg);
    // console.log($("#tweet-text").val(tweetMsg))

    // Enable/disable button
    const tweetBtn = $(counter).siblings("button");
    
    if (charsLeft < 0) {
      counter.css("color", "red");
      tweetBtn.prop("disabled", true);
      tweetBtn.addClass("btn-disable");
    } else {
      counter.css("color", "rgb(65, 65, 65)");
      tweetBtn.prop("disabled", false);
      tweetBtn.removeClass("btn-disable");
    }
  });
  
});