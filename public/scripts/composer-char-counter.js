$(document).ready(() => {

  $("#tweet-text").on("input", function(event) {
    console.log(140 - $(this).val().length);
  });

});