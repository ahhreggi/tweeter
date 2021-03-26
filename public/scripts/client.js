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
  } else if (seconds > 24 * 3600) {
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

// Submit handler
const submitTweetHandler = (event, useBobRoss = true) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Retrieve the hidden form component
  const form = $("#tweet-text");
  // Submit an ajax request using the form data
  fetchTweetData(form, loadTweets, useBobRoss);

};

// Submits a new tweet to the server then renders the response data received
const fetchTweetData = (form, loaderFunc, useBobRoss = false) => {

  // Retrieve the tweet data from the form
  const tweetMessage = form.val();

  // Validate the message (must be 1-140 characters in length)
  const length = tweetMessage.length;
  if (length > 0 && length <= 140) {

    // Construct the tweet data object
    let userInfo = {};
    if (useBobRoss) {
      userInfo = {
        "name": "Bob Ross",
        "avatars": "../images/bobross.png",
        "handle": "@BobRoss"
      };
    }
    const tweetData = {
      "user": userInfo,
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
        clearForm();
        // Reload all tweets (to update timestamps)
        loaderFunc(true);
      })
      .catch(err => console.log(err));

  }

};

// Loads existing tweets and renders them onto the page
const loadTweets = (recentlyTweeted = false) => {

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
      renderTweets(sortedTweets, recentlyTweeted);
    });

};

// Construct tweets in the given tweets array and append them to the tweets container
const renderTweets = (tweets, recentlyTweeted = false) => {

  const container = $("#all-tweets");
  for (const tweetData of tweets) {
    const tweetComponent = createTweetElement(tweetData);

    // Animate the new tweet as it appears
    if (recentlyTweeted) {
      const first = tweetComponent.first();
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
      }, 200);
    }
    container.append(tweetComponent);
  }

  const feedEnd = $("<span>you're all caught up!</span>");
  container.append(feedEnd);

};

// Displays the new tweet form in an animation if show is true, hides it otherwise.
const toggleForm = (form, show = true, speed = 400, delay = 0) => {

  setTimeout(() => {
    if (show) {
      form.slideDown(speed);
      form
        .css("opacity", 0)
        .animate(
          { queue: true, opacity: 1 },
          { duration: speed }
        );
      focusInput();
    } else {
      form
        .css("opacity", 1)
        .animate(
          { queue: true, opacity: 0 },
          { duration: speed }
        );
      form.slideUp(speed);
      clearForm();
    }
  }, delay);

};

// Clears the new tweet form
const clearForm = () => {
  // Clear the visible input field and hidden form
  const inputField = $("#tweet-text-input");
  $("#tweet-text-input").text("");
  // Update the tweet form counter (reset to empty)
  updateCounter(inputField); // eslint-disable-line
};

// Focuses the tweet form input field
const focusInput = (delay = 500) => {

  setTimeout(() => {
    $("#tweet-text-input").focus();
  }, delay);

};

$(document).ready(() => {

  const form = $("#new-tweet form");
  const scrollBtn = $("#scroll-btn");
  let composeVisible = true;

  form.css("opacity", 0);
  form.css("display", "none");

  // Load and render existing tweets
  loadTweets();

  // Animate initial loading of tweets
  const feed = $("#all-tweets");
  feed.css("opacity", 0);
  feed.css("display", "none");
  feed.slideDown(800);
  feed
    .css("opacity", 0)
    .animate(
      { queue: true, opacity: 1 },
      { duration: 400 }
    );

  setTimeout(() => {
    $(document).scrollTop(0);
    toggleForm(form, true, 800, 500);
  }, 100);


  // Focus the input field whenever the user clicks anywhere on the form
  form.on("click", () => focusInput(0));

  // Listen for new tweet form submission then submit and render the tweet data
  form.on("submit", (event) => submitTweetHandler(event, bobRossMode)); // eslint-disable-line

  // Alter styles of elements at different scroll positions on the page
  $(document).on("scroll", function() {

    const position = $(this).scrollTop();
    const endMsg = $("#all-tweets > span");

    // Animate the end-of-feed message when the user scrolls to the bottom
    if (position + $(window).height() + 100 > $(this).height()) {
      endMsg.css("opacity", "1");
    } else {
      endMsg.css("opacity", "0");
    }

    // Show the corner compose button when they scroll below a certain position
    if (position > 250) {
      scrollBtn.css("visibility", "visible");
      scrollBtn.fadeIn(200);
    } else {
      scrollBtn.fadeOut(200);
    }

  });

  // Control the toggling of the form's visibility based on the scroll position
  $(".compose").on("click", function() {

    const position = $(document).scrollTop();

    // Toggle the form if the user is at the top of the page
    if (position <= 250) {
      if (!composeVisible) {
        toggleForm(form, true);
        composeVisible = true;
      } else if (composeVisible) {
        toggleForm(form, false);
        composeVisible = false;
      }
    // Show the form regardless of current state if the user is lower on the page
    } else if (position > 250) {
      $(document).scrollTop(0);
      if (!composeVisible) {
        toggleForm(form, true, 500, 500);
        composeVisible = true;
      } else {
        focusInput();
      }
    }

  });

});