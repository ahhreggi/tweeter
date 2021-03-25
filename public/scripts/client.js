let recentlyTweeted = false;
let composeVisible = true;

// Returns a string describing the relative time since the given timestamp (milliseconds).
const convertTimestamp = (timestamp) => {

  // Retrieve current date in milliseconds and calculate difference
  const currentDate = new Date();
  const currentDateTs = Math.floor(currentDate.getTime());
  const seconds = Math.floor((currentDateTs - timestamp) / 1000);

  // Return a message based on difference
  if (seconds > 365 * 24 * 3600) {
    const years = Math.floor(seconds / (365 * 24 * 3600));
    return `${years} year${years === 1 ? "" : "s"} ago`;
  } else if (seconds > 30 * 24 * 3600) {
    const months = Math.floor(seconds / (30 * 24 * 3600));
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else if (seconds > 2 * 24 * 3600) {
    const days = Math.floor(seconds / (24 * 3600));
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (seconds > 3600) {
    const hours = Math.floor(seconds / (3600));
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (seconds > 60) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (seconds > 2) {
    return `${seconds} seconds ago`;
  } else {
    return "Just now";
  }

};

// Returns a single tweet component constructed using the given tweet data
const createTweetElement = (tweetData) => {

  // Create the main tweet container
  const $tweet = $(`<article class="tweet">`);

  // Create the header
  const $header = $("<header>");

  // Create the header author
  const $author = $(`<span class="author">`);
  const $avatar = $(`<img src="${tweetData.user.avatars}" alt="profile picture" draggable="false" />`);
  $author.append($avatar);
  $author.append(tweetData.user.name);

  // Create the header handle
  const $handle = $(`<span class="handle">`);
  $handle.append(tweetData.user.handle);

  // Add the header elements to the header
  $header.append($author);
  $header.append($handle);

  // Create the tweet body
  const $content = $("<p>");
  $content.append(tweetData.content.text);

  // Create the footer
  const $footer = $("<footer>");

  // Create the footer timestamp
  const date = convertTimestamp(tweetData.created_at);
  const $timestamp = $(`<div>${date}</div>`);

  // Create the footer icons
  const $icons = $(`
    <div>
      <img src="/images/icons/flag.png" alt="report" draggable="false" />
      <img src="/images/icons/retweet.png" alt="retweet" draggable="false" />
      <img src="/images/icons/heart.png" alt="like" draggable="false" />
    </div>
  `);

  // Add the footer elements to the footer
  $footer.append($timestamp);
  $footer.append($icons);

  // Add all of the elements to the tweet
  $tweet.append($header);
  $tweet.append($content);
  $tweet.append($footer);

  // Return the tweet component
  return $tweet;

};

// Construct tweets in the given tweets array and append them to the tweets container
const renderTweets = (tweets) => {

  const container = $("#all-tweets");
  for (const tweetData of tweets) {
    const tweetComponent = createTweetElement(tweetData);

    if (recentlyTweeted) {
      const first = tweetComponent.first();
      // first.slideUp();
      first.css("display", "none");

      recentlyTweeted = false;
      setTimeout(() => {
        first.slideDown(500);
        first.css("display", "block");
        first
          .css('opacity', 0)
          .animate(
            { queue: true, opacity: 1 },
            { duration: 500 }
          );
      }, 500);
    }
    container.append(tweetComponent);
  }

};

const fetchTweetData = (form, renderFunc) => {

  // Retrieve the tweet data from the form
  const tweetMessage = form.val();

  // Validate the message (must be 1-140 characters in length)
  const length = tweetMessage.length;
  if (length > 0 && length <= 140) {

    // Construct the tweet data object
    const tweetData = {
      "user": {
        "name": "Bob Ross",
        "avatars": "../images/bobross.png",
        "handle": "@BobRoss"
      },
      "content": {
        "text": tweetMessage
      },
      "created_at": new Date().getTime()
    };

    // Convert the tweet data object into a query string
    const data = form.serialize() + "&" + $.param(tweetData);

    // Disable the submit button
    const submitBtn = form.siblings().find("button");
    toggleDisable(submitBtn, true); // eslint-disable-line

    // Submit a post request with the tweet data
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: data
    })
      .then(() => {
        // Clear the visible input field and hidden form
        const inputField = $("#tweet-text-input");
        $("#tweet-text-input").text("");
        // Update the tweet form counter (reset to empty)
        updateCounter(inputField); // eslint-disable-line
        // Reload all tweets (to update timestamps)
        recentlyTweeted = true;
        renderFunc();
      })
      .catch(err => console.log(err));

  }

};

// Submit handler
const submitTweetHandler = event => {

  // Prevent the default form submission behavior
  event.preventDefault();
  // Retrieve the hidden form component
  const form = $("#tweet-text");
  // Submit an ajax request using the form data
  fetchTweetData(form, loadTweets);

};

// Loads existing tweets and renders them onto the page
const loadTweets = () => {

  // Retrieve the array of tweets as JSON
  $.ajax({
    url: "/tweets",
    method: "GET"
  })
    .then(tweets => {
      // Sort the data array by timestamp (most recent to oldest)
      const sortedTweets = tweets.sort((tweet1, tweet2) => tweet1.created_at - tweet2.created_at).reverse();
      // Clear the page of existing elements
      $("#all-tweets").empty();
      // Render the sorted tweets
      renderTweets(sortedTweets);
    });

};

// Focuses the tweet form input field
const focusInput = () => {

  return setTimeout(() => {
    $("#tweet-text-input").focus();
  }, 600);

};

$(document).ready(() => {

  // Load and render existing tweets
  loadTweets();

  const form = $("#new-tweet form");
  const scrollBtn = $("#scroll-btn");

  $(".like").on("click", function() {
    // $(this).addClass("clicked");
    alert("clicked!");
  });

  // Listen for new tweet form submission then submit and render tweet data
  $("#new-tweet form").on("submit", function(event) {
    submitTweetHandler(event);
  });

  // Show/hide the corner compose button based on the user's position
  $(document).on("scroll", function() {

    const pos = $(document).scrollTop();

    if (pos <= 450) {
      scrollBtn.fadeOut(200);
    } else {
      scrollBtn.css("visibility", "visible");
      scrollBtn.fadeIn(200);
    }

    if (composeVisible) {
      if (pos <= 350) {
        form.slideDown();
      } else if (pos > 600) {
        form.slideUp();
      }
    }

  });

  // Toggle the form's visibility based on the user's position on the page
  $(".compose").on("click", function() {

    const pos = $(document).scrollTop();
    const form = $("#new-tweet form");
    let inputTO;

    if (pos <= 400) {
      if (!composeVisible) {
        form.slideDown();
        composeVisible = true;
        inputTO = focusInput();
      } else if (composeVisible) {
        clearTimeout(inputTO);
        form.slideUp();
        composeVisible = false;
      }
    } else if (pos > 400) {
      $(document).scrollTop(0);
      composeVisible = true;
      inputTO = focusInput();
    }

  });

  $("#new-tweet").on("click", function() {
    $("#tweet-text-input").focus();
  });

});