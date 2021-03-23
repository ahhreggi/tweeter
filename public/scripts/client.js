$(document).ready(() => {

  // $(".new-tweet button").on("click", function() {
  //   const tweetMsg = $("#tweet-text").html();
  //   $("#hidden").val(tweetMsg);
  // })

  $(".tweet").on("mouseenter", function() {

    const handle = $(this).find(".handle");
    handle.css("visibility", "visible")

  });

  $(".tweet").on("mouseleave", function() {

    const handle = $(this).find(".handle");
    handle.css("visibility", "hidden")

  })

});