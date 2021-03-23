$(document).ready(() => {

  $("#tweet-text").on("input", function() {
    const charsLeft = 140 - $(this).val().length;
    const counter = $(this).parent().find(".counter");
    counter.html(charsLeft);
    if (charsLeft < 0) {
      counter.addClass("counter-limit");
    } else {
      counter.removeClass("counter-limit");
    }
  });
  
});