const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227 // milliseconds
};

// Returns a string describing the relative time since the given timestamp (milliseconds).
const convertTimestamp = (timestamp) => {
  const currentDate = new Date();
  const currentDateTs = Math.floor(currentDate.getTime()); // milliseconds
  const seconds = Math.floor((currentDateTs - timestamp) / 1000); // seconds
  if (seconds > 365 * 24 * 3600) {
    const years = Math.floor(seconds / (365 * 24 * 3600));
    return `${years} year${years === 1 ? "" : "s"} ago`;
  } else if (seconds > 30 * 24 * 3600) {
    const months = Math.floor(seconds / (30 * 24 * 3600));
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else if (seconds > 2 * 24 * 3600) {
    const days = Math.floor(seconds / (24 * 3600));
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (seconds > 24 * 3600) {
    return "yesterday";
  } else if (seconds > 60) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else {
    return "Just now";
  }
};

const createTweetElement = (tweetData) => {

  // Create a single tweet
  const $tweet = $(`<article class="tweet">`);

  // Create the header
  const $header = $("<header>");

  // Create the header author
  const $author = $(`<span class="author">`);
  const $avatar = $(`<img src="${tweetData.user.avatars}" alt="profile picture">`);
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
  const $icons = $(`<div>
    <img src="/images/icons/flag.png" alt="report" />
    <img src="/images/icons/retweet.png" alt="retweet" />
    <img src="/images/icons/heart.png" alt="like" />
    </div>`
  );

  // Add the footer elements to the footer
  $footer.append($timestamp);
  $footer.append($icons);

  // Add all of the elements to the tweet
  $tweet.append($header);
  $tweet.append($content);
  $tweet.append($footer);

  // Return the tweet
  return $tweet;

};


$(document).ready(() => {

  // Create a new tweet with the sample data
  const $tweet = createTweetElement(tweetData);

  // Add the tweet to the main container
  // $("main");
  $("main").append($tweet);




  // Toggle the visibility of the user's @handle on hover
  $(".tweet").on("mouseenter", function () {

    const handle = $(this).find(".handle");
    handle.css("visibility", "visible");

  });

  $(".tweet").on("mouseleave", function () {

    const handle = $(this).find(".handle");
    handle.css("visibility", "hidden");

  });

});