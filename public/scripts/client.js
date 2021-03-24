const data = [
  {
    "user": {
      "name": "Bob Ross",
      "avatars": "../images/bobross.png",
      "handle": "@BobRoss"
    },
    "content": {
      "text": "Tell you what: let's get crazy today. "
    },
    "created_at": 1616613010000
  },
  {
    "user": {
      "name": "Bob Ross",
      "avatars": "../images/bobross.png",
      "handle": "@BobRoss"
    },
    "content": {
      "text": "Sometimes it's fun to play little games in your mountains. "
    },
    "created_at": 1616602210000
  },
  {
    "user": {
      "name": "Bob Ross",
      "avatars": "../images/bobross.png",
      "handle": "@BobRoss"
    },
    "content": {
      "text": "Learn to work with anything that happens. "
    },
    "created_at": 1611504610000
  },
  {
    "user": {
      "name": "Bob Ross",
      "avatars": "../images/bobross.png",
      "handle": "@BobRoss"
    },
    "content": {
      "text": "All kinds of beautiful little things just happen. "
    },
    "created_at": 1606234210000
  },
  {
    "user": {
      "name": "Bob Ross",
      "avatars": "../images/bobross.png",
      "handle": "@BobRoss"
    },
    "content": {
      "text": "Just let it sorta dance around in the sky. "
    },
    "created_at": 1615565410000
  },
  {
    "user": {
      "name": "Bob Ross",
      "avatars": "../images/bobross.png",
      "handle": "@BobRoss"
    },
    "content": {
      "text": "You decide where all these things are. "
    },
    "created_at": 1520871010000
  },
  {
    "user": {
      "name": "Bob Ross",
      "avatars": "../images/bobross.png",
      "handle": "@BobRoss"
    },
    "content": {
      "text": "Just let it sorta dance around in the sky. "
    },
    "created_at": new Date().getTime()
  }
];

// Returns a string describing the relative time since the given timestamp (milliseconds).
const convertTimestamp = (timestamp) => {
  const currentDate = new Date();
  const currentDateTs = Math.floor(currentDate.getTime());
  const seconds = Math.floor((currentDateTs - timestamp) / 1000);
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

// Add each tweet in tweets to the tweets container
// tweets => an array of tweetData objects
const renderTweets = (tweets) => {
  const container = $("main");
  for (const tweetData of tweets) {
    const tweetComponent = createTweetElement(tweetData);
    container.append(tweetComponent);
  }
};

$(document).ready(() => {

  // Sort data array by timestamp
  const dataSorted = data.sort((tweet1, tweet2) => tweet1.created_at - tweet2.created_at).reverse();

  // Render all tweets from the data array from most recent to oldest
  renderTweets(dataSorted);

  // Toggle the visibility of the user's @handle on hover
  $(".tweet").on("mouseenter", function() {

    const handle = $(this).find(".handle");
    handle.css("visibility", "visible");

  });

  $(".tweet").on("mouseleave", function() {

    const handle = $(this).find(".handle");
    handle.css("visibility", "hidden");

  });

});