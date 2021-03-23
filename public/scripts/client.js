$(document).ready(() => {

  // Toggle the visibility of the user's @handle on hover
  $(".tweet").on("mouseenter", function() {

    const handle = $(this).find(".handle");
    handle.css("visibility", "visible")

  });

  $(".tweet").on("mouseleave", function() {

    const handle = $(this).find(".handle");
    handle.css("visibility", "hidden")

  })

});