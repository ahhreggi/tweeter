const quotes = [
  "'Course I make some mistakes at home, and we call those \"abstracts\".",
  "(chuckles) Just beat the devil out of it.",
  "...right on the edge of the blade...",
  "...three hairs and some air...",
  "...two hairs and some air...",
  "A flock of trees? I don't know... a STAND of trees. That's what you call them!",
  "A half a hair and some air.",
  "A lot of things happening right here.",
  "A place for all the little creatures to put their money.",
  "A place you want to go and run through bare-footed.",
  "A thin, and let me say that again, a THIN layer of liquid clear.",
  "A very quiet little sky.",
  "A very, very small amount.",
  "A winter scene that's very warm, very pretty, and will just make you feel good.",
  "Absolutely no limits!",
  "All kinds of beautiful little things just happen.",
  "All these fantastic things... they just sorta happen.",
  "All these little things make it interesting.",
  "All we do is just sorta have an idea in our mind, and we just sorta let it happen.",
  "All we're trying to do is teach you a technique and turn you loose on the world.",
  "All you do is just go back with it.",
  "All you need is a dream in your heart.",
  "All you're doing here is whisper-light.",
  "All you're worried about is this nice outside shape.",
  "Allow the colors to blend together.",
  "Always doing the things furthest away first and working forward.",
  "Always follow the angles here.",
  "Always follow the angles.",
  "Always have that little roll of paint.",
  "Always keep the brush moving.",
  "Always start with a clean brush in a light area and work outward.",
  "And that easy, we've got a happy mountain.",
  "Angles are very, very important.",
  "Another thing that seems to give us a lot of problems is almighty clouds.",
  "Anyone can paint!",
  "Anything that happens here, we can live with and we can turn it into something that looks pretty good most of the time.",
  "Anything that happens here, you can work with it.",
  "Anything you are willing to practice, you can do!",
  "Art is an expression of self.",
  "As long as you have fun and learn from it, nothing is wasted.",
  "As usual, Bob's gonna do a big tree.",
  "At some point in between, you have to reach a happy medium.",
  "Be careful with this bright red -- it'll eat up your whole world in a heartbeat.",
  "Be sure it's odorless or you'll be working by yourself.",
  "Be... so... careful!",
  "Beautiful little roundy-hill-type things.",
  "Begin laying in just some beautiful little highlights.",
  "Big buildings are just little buildings that had a shot of vitamins.",
  "Blend color right here on the canvas.",
  "Blend it all together and have fun with it.",
  "Bravery test!",
  "Brush mix!",
  "Cherish it! Take care of it!",
  "Chickens need a place to live too.",
  "Clouds could very well be the freest things in nature.",
  "Clouds have form and shape and life and are interesting, they're not just ol' dull clouds.",
  "Cover a couple of cameramen, and we're in business!",
  "Create that little fuzzy look.",
  "Create the illusion.",
  "Dance in a happy little sky.",
  "Devote a little time to working with it.",
  "Do a cabin-ectomy.",
  "Do whatever feels right.",
  "Do you want to get crazy?",
  "Don't be afraid of it.",
  "Don't be afraid of this big brush.",
  "Don't be afraid to experiment.",
  "Don't be afraid to go out on a limb once in a while.",
  "Don't be afraid to have a lot of greens.",
  "Don't fight these things -- allow them to happen.",
  "Don't get carried away.",
  "Don't just cover it all up -- leave these spots!",
  "Don't just throw it up there and think that a cloud will appear.",
  "Don't let this get too strong or it'll stand out.",
  "Don't let your trees get too symmetrical... too even.",
  "Don't over do it -- be careful. Be careful.",
  "Don't overwork -- be lazy!",
  "Don't piddle with them -- don't worry about them.",
  "Don't think there's anybody that doesn't like mountains. Well, maybe there is.",
  "Don't want much... don't want much...",
  "Don't want to destroy, just diffuse.",
  "Don't want to overkill.",
  "Don't want to set the sky on fire.",
  "Don't want to set these clouds on fire.",
  "Don't worry about it -- just sort of throw it in.",
  "Don't worry about it; have fun with it!",
  "Drop in a fantastic, big ol' mountain.",
  "Drop in a happy little sky here.",
  "Drop in some happy little shadows.",
  "Enough of that.",
  "Every series, we need to have a crazy day.",
  "Every time you add another plane, you create more depth.",
  "Everybody has their own idea of what a mountain should look like.",
  "Everybody likes mountains.",
  "Everybody needs to sing in the sunshine!",
  "Everybody should have a friend.",
  "Everybody should paint what they see and what they feel.",
  "Everybody will see nature through different eyes.",
  "Everything should get lighter toward the horizon.",
  "Feel the power of the water.",
  "Find out which one works best for you, and that's the one that you want to use.",
  "Follow the contour of the mountain.",
  "Follow these angles.",
  "Fun time! Now we wash the ol' brush!",
  "Fun time!",
  "Gentle, swirling motions here.",
  "Get a nice, even distribution of paint all through the bristles.",
  "Get it to where you want it, and leave it alone.",
  "Get nervous.",
  "Get strong with it.",
  "Get tough with it.",
  "Give him some arms -- a tree needs some arms.",
  "Give it a lift-upper.",
  "Give this ol' windmill a leg!",
  "Go out and spend some time talking to a tree.",
  "Great time!",
  "Have to have dark in order to show light.",
  "He just hangs around back there and has a good time all day.",
  "He lives right there -- that's his home.",
  "He's a healthy cloud.",
  "He's got the leanies!",
  "He's like the rest of us -- he's about half crazy.",
  "Help them make a happy buck or two.",
  "Here and there and there and here.",
  "Highlight a few of these rascals.",
  "Hit it, and get away from it.",
  "However you want to change this, that's the way it should be.",
  "I am a fanatic for water.",
  "I don't know exactly what they are, and I don't really care at this point.",
  "I don't know if you can ever make a pet out of an alligator, but I had an alligator who lived with me.",
  "I don't want a lot of mountains today.",
  "I just like to wash brushes.",
  "I like big trees.",
  "I like the mountains -- they're my favorite.",
  "I like to be able to create my own world.",
  "I lived in Alaska for many, many years.",
  "I look for easy ways to do things.",
  "I love to make trees.",
  "I really don't know what we're gonna do except have some fun.",
  "I think we'll just do a happy little picture today.",
  "I think we'll put a happy little cloud up in the sky.",
  "I think you'll be tickled with what you can do with something that starts out looking this bad.",
  "I thought today, this would be our crazy painting.",
  "I used to work for weeks to make a tree.",
  "I wanna be careful to not let the color go past the tape.",
  "I want a very gentle, quiet little sky.",
  "I want some happy little things happening up here in the sky.",
  "I want this one a little bit darker.",
  "I want this to be very bright right in here.",
  "I want to darken the edges.",
  "I want to do something that's just a little bit different, and I think you'll find it's fun.",
  "I would put water in just about everything.",
  "I'll bet you didn't realize you had that much power.",
  "I'll show you exactly the kind of messes we get into sometimes.",
  "I'm a nature freak.",
  "I'm always looking for a nice, easy way to do this.",
  "I'm lazy... I look for easy ways to do things.",
  "If everything was good all the time, pretty soon you'd be accepting that as normal.",
  "If there's a secret to anything, it's practice.",
  "If there's any secret to this technique, or any other technique: it's practice.",
  "If we make a boo-boo, it's right here -- but that's alright, because we don't make mistakes in our world.",
  "If you comply with that rule, how can you go wrong?",
  "If you learn to make one tree, you can make a million trees.",
  "If you over-mix it, you just get one dead color.",
  "If you want to be good at anything, you have to practice.",
  "If you're going to knock a wasp's nest down, you run.",
  "If you're gonna do mountains, it's fun to have little bumps on them here and there.",
  "In the woods, you have all different colors of green.",
  "Isn't life wonderful?",
  "It doesn't hurt anybody, everybody's happy, and it brings a lot of joy to people.",
  "It doesn't matter in our world where it goes.",
  "It doesn't take much, but you have to devote that time.",
  "It helps, when you're doing these kinds of things, make up little stories in your mind.",
  "It should give you a lot of ideas of a lot of crazy things you can do.",
  "It takes a very, very little bit.",
  "It takes very little color.",
  "It'll just eat up all the crimson in the world.",
  "It'll open whole new worlds for you once you learn to make friends with this knife.",
  "It's a fantastic day here!",
  "It's a fantastic day here, and I hope it is wherever you're at.",
  "It's a lot of fun.",
  "It's always trying to go somewhere that it can be level.",
  "It's bad when you have to tie a bucket on the side of your painting.",
  "It's cold, but it's beautiful.",
  "It's easy to add more color, but it's a son of a gun to take it away.",
  "It's just a game of angles.",
  "It's the contrast in this painting that makes it so pretty.",
  "It's time we got strong here.",
  "It's too far away.",
  "It's very easy to make a sky darker, but it's a son of a gun to make it lighter.",
  "It's very hard to see your painting when you're right up against it.",
  "Just a nice little mountain, a little friendly guy.",
  "Just any old thing that'll stick to the canvas.",
  "Just dance it around.",
  "Just decide basically where you wanna start, and off you go!",
  "Just follow your imagination.",
  "Just go around and try them all.",
  "Just gonna start any ol' where.",
  "Just have a good feeling... be happy, and in love with your life and your world.",
  "Just leave that space open.",
  "Just let it bounce around and play.",
  "Just let it float.",
  "Just let it go, have fun.",
  "Just let it sort of run across here, wherever you want it to go.",
  "Just let it sorta dance around in the sky.",
  "Just let it work around and play.",
  "Just let them fall right out of your brush.",
  "Just let your imagination take you to anywhere you want to be.",
  "Just like baking a cake!",
  "Just like it wasn't even there.",
  "Just make it up.",
  "Just make little X's, and we'll put in a happy little sky.",
  "Just make little criss-cross strokes.",
  "Just mix it up real good.",
  "Just practice, and you really can do this.",
  "Just sort of blend it around.",
  "Just sorta make these things up in your mind, and let them drop in.",
  "Just sorta rock back and forth.",
  "Just sorta stir it up, don't overdo -- just enough to bring it together.",
  "Just sorta twist in a little sky.",
  "Just sorta work it around and around here.",
  "Just tap. Give it that little push.",
  "Just walk right back into this painting.",
  "Keep it moving.",
  "Keep this brush moving all the time.",
  "Learn to control it.",
  "Learn to use this knife, and you won't believe what it can do!",
  "Learn to work with anything that happens.",
  "Leave a little area open here.",
  "Leave some open spots here and there.",
  "Let 'em have fun.",
  "Let 'em have it!",
  "Let it continually go in circles, otherwise it'll look like it's raining up.",
  "Let it float right down the side of the mountain.",
  "Let it sort of bounce around and play.",
  "Let me put a little on the other side too, we don't want it to feel left out.",
  "Let some little things just shine through.",
  "Let the brush play and have fun -- let it go!",
  "Let them have a good time in your world.",
  "Let us know, and we'll do some more crazy things for you.",
  "Let your imagination be your guide.",
  "Let your imagination wander around while you're doing these things.",
  "Let's build a happy little cloud in the sky.",
  "Let's build us a little cloud.",
  "Let's build us a mountain!",
  "Let's do a happy little mountain.",
  "Let's do a winter scene, what the heck.",
  "Let's do another one -- what the heck!",
  "Let's get crazy here.",
  "Let's get crazy.",
  "Let's get right to it.",
  "Let's go on up here and let's get started.",
  "Let's have a big cloud!",
  "Let's have some big, fluffy clouds in this painting.",
  "Let's have some fun today.",
  "Let's have some fun!",
  "Let's just do a painting that's fun.",
  "Let's just enjoy today.",
  "Let's just have a good time.",
  "Let's just have some fun today.",
  "Let's just sort of play a little color here and there.",
  "Let's make a wild mountain today.",
  "Let's make some big, fluffy clouds today!",
  "Let's make some happy little clouds in our world.",
  "Let's make this a little more interesting.",
  "Let's play some games!",
  "Let's put in a happy little sky.",
  "Let's really have some fun.",
  "Let's start with an almighty sky here.",
  "Let's take the almighty brush here.",
  "Let's work on that tree right there.",
  "Life's wonderful, isn't it?",
  "Look at all those... thousands of leaves!",
  "Look at your painting and make a decision.",
  "Looks like there's a storm coming already.",
  "Make big billowy, fluffy clouds.",
  "Make friends with trees.",
  "Make your own mind up about where your clouds should live.",
  "Maybe I'll have a big mountain today.",
  "Maybe there's a happy little tree... he lives right there.",
  "Maybe this is the same cloud.",
  "Maybe we will have a little moon up here.",
  "Maybe we'll do some almighty mountains today.",
  "Mix it up, just like you're making a cake or something.",
  "Mountains are so simple that they're hard!",
  "Mountains come in all shapes and sizes.",
  "Nothing to it!",
  "Nothing to it.",
  "Now a little rabbit can hide down there and look over at us!",
  "Now let's use the fan brush.",
  "Now things are going to start happening.",
  "Now we can start picking out some individual things.",
  "Now we'll fluff it.",
  "Now we're ready to start working it.",
  "Now, very gently, we'll hypnotize it.",
  "OK, let's have some fun!",
  "Oh dear, here comes a tree!",
  "Oh, the agony! I remember it.",
  "Once again: circular patterns.",
  "One of our golden rules is that thin paint will stick to thick paint.",
  "Only takes a minute.",
  "Painters are expected to be different.",
  "Painting does not have to be difficult.",
  "Painting is as individual as people are.",
  "Painting offers freedom.",
  "Painting used to drive me crazy.",
  "People are so excited when they see this happen.",
  "Practice visualizing things in your mind.",
  "Pretend that if you're not careful your hand will literally just float away.",
  "Pretend you're a whisper floating across here.",
  "Pull from the outside in.",
  "Quiet, quiet little bushes.",
  "Ready to go!",
  "Really be stingy with it.",
  "Really work it into the bristles.",
  "Remember where your finger's been before you scratch your nose.",
  "Say all that with a mouthful of rocks.",
  "Scrape that canvas hard! All you want to remain on there is the value.",
  "See how easy that is?",
  "See how easy that was?",
  "See how far away that looks already?",
  "See? I knew you could do it!",
  "Shh... our secret! Don't tell, just enjoy!",
  "Shoot, I've got to get a little crazy.",
  "Show it who's boss!",
  "Sing along as you're doing this.",
  "So many things you can create.",
  "Soft as a meadow.",
  "Sometimes it's fun to play little games in your mountains.",
  "Sometimes the brush is lazy.",
  "Sometimes we get crazy here.",
  "Son of a gun, it looks like we've got two big eyes on there.",
  "Sort of an orangy-yellowish color.",
  "Sort of mix it up.",
  "Start with a small amount and blend upward.",
  "Stir them up a little, then blend them.",
  "Take right off today!",
  "Take your time and play with these things.",
  "Talent is a pursued interest.",
  "Talent is nothing more than a pursued interest.",
  "Tell you what: let's get crazy today.",
  "That blue is so strong, it'll eat up your whole world in a heartbeat.",
  "That gives us a general idea of how that mountain was made.",
  "That knife's a little big... let me get my small knife.",
  "That little painter man is so cute!",
  "That rascal's sneaky!",
  "That simple, that easy!",
  "That son-of-a-gun is growing on us!",
  "That was so much fun! Let's get crazy!",
  "That'll be a challenge!",
  "That's a fantastic little cloud.",
  "That's about all we need.",
  "That's about enough right there.",
  "That's exactly where it should be.",
  "That's one of those happy accidents.",
  "That's pretty already, shoot... but we're not gonna stop there.",
  "That's the fun part of this whole technique.",
  "That's the job I want in my next life -- I wanna come back and be a cloud and just float around and have a good time.",
  "That's the most fun of all.",
  "That's what makes it fun! Just enjoy!",
  "That's why I like it so much.",
  "The birds would get sort of crazy.",
  "The cloud needs a little friend.",
  "The joy of painting really is universal.",
  "The just do nice things for you.",
  "The more that you practice, the more you're able to visualize things.",
  "The only thing I'm good at is falling down.",
  "The other thing that is so fantastic about painting is that it teaches you to see.",
  "The round brush is so fun, let's go back to that.",
  "The smallest, very little amount.",
  "The titles comes out of there, it sounds like an old car.",
  "There's no big secret to this.",
  "There's nothing worse than an angry tree.",
  "There's some little stringy ones that live down here.",
  "There's too many complicated things in our life already.",
  "These are far away, and I'm not looking for a lot of detail.",
  "They are restricted only by your imagination.",
  "They are very special. Take care of those!",
  "They just sort of bounce around and have fun up there.",
  "They think you're magic!",
  "Think about form and shape -- how do you want this thing to be?",
  "Think about some basic shapes and forms in this -- don't just throw them on at random.",
  "Think like a cloud.",
  "Think like a tree when you do these.",
  "This is a very individual thing, painting is.",
  "This is how you make a giant cartoon figure.",
  "This is one that you can do.",
  "This is such a super day!",
  "This is the lazy man's way of painting.",
  "This is where the whole ecosystem starts.",
  "This is where you take out all your frustrations and all your hostilities, and just have a good time.",
  "This is your dirt, so you put it where you want it.",
  "This piece of canvas is your world.",
  "Throw in some happy little things wherever you want them.",
  "Time to get crazy now!",
  "Time to get crazy.",
  "Today's such a wonderful day, let's just make a happy little painting.",
  "Today, I want softness in our world... tranquility, quiet, peaceful.",
  "Today, we have to make a big decision.",
  "Tongue got over my teeth there and I couldn't see what I was saying.",
  "Trees are nice people.",
  "Truly the joy of painting is the friends that you make doing it.",
  "Try not to kill it.",
  "Use a color that's a little more muted and quiet.",
  "Use a lot of pressure.",
  "Use that to your advantage.",
  "Use what happens naturally.",
  "Use your imagination.",
  "Very gently go across the entire sky.",
  "Very soft, very quiet.",
  "Very, very... let me say that one more time: very.",
  "Water breaks, and it churns, and it has fun!",
  "We all need a friend.",
  "We are really trying to teach you a technique. We're not trying to teach you to copy.",
  "We become mud-mixers.",
  "We can stir this up a little bit.",
  "We don't care.",
  "We don't know exactly where this is gonna go, and we don't care at this point.",
  "We don't know where it goes.",
  "We don't know where that goes.",
  "We don't want to overload it, just a little bit.",
  "We have to have some fun.",
  "We never duplicate anything exactly.",
  "We planned this son-of-a-gun right from the beginning.",
  "We spend so much of our lives looking, but never, never seeing.",
  "We take off all the excess paint.",
  "We use darkness to make those colors stand out!",
  "We use no patterns, and no tracings.",
  "We want this swirling, churning actions here.",
  "We'll have a super time.",
  "We'll just have a firecracker of a sky up here.",
  "We'll just sort of see what happens.",
  "We'll just sort of slip in some clouds.",
  "We'll just take the brush strokes out.",
  "We'll let our imaginations take us wherever we want to go today.",
  "We'll make some big ol' huge mountains!",
  "We'll make those decisions later.",
  "We'll put a few little nicety things in there.",
  "We'll put a little mountain here.",
  "We'll start playing a little bit.",
  "We're gonna give him some buns to sit on.",
  "We're gonna have a light source right in here.",
  "We're gonna play some games here with different planes.",
  "We're just looking for a nice, basic, outside shape. We could care less what's going on inside here.",
  "We're like drug dealers -- we come into town and get people absolutely addicted to painting.",
  "We're looking for a nice, even distribution of color.",
  "We're looking for happy little clouds.",
  "We're not too worried about it today.",
  "We're ready to get serious with this.",
  "We've got a conglomeration going on there!",
  "Whatever works is good.",
  "When I finally got to Alaska, whew boy, I just went crazy.",
  "When the birds take over, I'll have friends!",
  "Where are we going with this?",
  "Where do the clouds live in your world?",
  "Wherever you think they should be, then that's exactly where they should be.",
  "Who knows? Get crazy!",
  "Wiggle it, then sharpen it.",
  "Wind it up, blend it together.",
  "Wind this up and blend it together.",
  "You can always add more if you want it.",
  "You can begin making all kinds of beautiful shapes up in the sky.",
  "You can blend this until it absolutely goes away and leaves you.",
  "You can change your mind right mid stream.",
  "You can continue to blend it until it just goes away.",
  "You can create any illusion that you can conceive in your mind.",
  "You can determine what your world is like.",
  "You can do all this blending without becoming a mud-mixer.",
  "You can do anything that you believe you can do.",
  "You can do anything that you want to do... you can move mountains!",
  "You can do anything you desire on this canvas.",
  "You can do it!",
  "You can end up with great big cotton balls in the sky if you're not careful.",
  "You can just go on and on and on.",
  "You could sit there with your one-haired brush for a week trying to do that.",
  "You decide -- you have to make these big decisions.",
  "You decide where all these things are.",
  "You didn't know you had so much power, did you?",
  "You do it the way that you want it.",
  "You do whatever works for you.",
  "You don't have to tell them you did this with a paper towel.",
  "You don't have to work at it hardly at all.",
  "You don't want it to be flat.",
  "You have to make all these big decisions when you have power.",
  "You have to make an almighty decision.",
  "You have to make friends with it.",
  "You have to make these big decisions in your world.",
  "You have to sort of plan these clouds.",
  "You have unlimited power here.",
  "You just sort of have to make almighty decisions.",
  "You knew it was there all the time.",
  "You know I'm crazy about water.",
  "You know me -- I like water.",
  "You know me -- I love water.",
  "You know me, I get crazy.",
  "You know what? Let's get crazy.",
  "You learn to take advantage of whatever happens and use it to make your painting special.",
  "You make the big decisions where all these things live in your world.",
  "You make the big decisions.",
  "You need to understand nature.",
  "You really cannot make a mistake here.",
  "You want to be able to control these rascals.",
  "You wouldn't buy somebody else's mistakes; nobody's going to buy yours.",
  "You'd better get out your big coat and put it on.",
  "You'll be amazed at some of the effects you can achieve.",
  "You'll be amazed at what you can do if you'll just try.",
  "You're gonna have one WILD day!",
  "You're limited only by your imagination.",
  "You've got to have a little sadness once in awhile to let you know when the good times come.",
  "Your artist license gives you complete freedom.",
  "Zooooom... you've gotta make the little noises or it doesn't work right."
];

// Returns a random Bob Ross quote
const getOneQuote = (array = true) => {

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return array ? quote.split(" ").map(word => word + " ") : quote;

};

// Returns an array consisting of words from of 1+ quotes
const getQuote = () => {
  let message = [];
  let quote = getOneQuote();
  let quoteLog = [quote];
  while (message.concat(quote).join(" ").length < 140) {
    message = message.concat(quote);
    quote = getOneQuote();
    while (quoteLog.includes(quote)) {
      quote = getOneQuote();
    }
    quoteLog.push(quote);
  }
  return message;
};

// Move cursor to the end of the input field
const focusEndInput = () => {
  $("#tweet-text-input").focus();
  document.execCommand("selectAll", false, null);
  document.getSelection().collapseToEnd();
};

let bobRossMode = true;

$(document).ready(() => {

  const inputField = $("#tweet-text-input");
  const bobRoss = $("#bob-ross");
  const instructions = $("#profile-header p");
  const toolTip = $("#profile-header p span");

  let quote = getQuote();
  let quoteIndex = 0;
  let message = [];
  let showingInstructions = true;

  toolTip.css("opacity", "1");

  // Resets the current message
  const resetBobRoss = () => {

    quote = getQuote();
    quoteIndex = 0;
    message = [];

  };

  // Shows or hides the instructions
  const toggleInstructions = (show) => {

    if (show) {
      instructions.slideDown(500);
      instructions
        .css("opacity", 0)
        .animate({
          queue: true,
          opacity: 1
        }, {
          duration: 500
        });
      showingInstructions = true;
    } else {
      instructions
        .css("opacity", 1)
        .animate({
          queue: true,
          opacity: 0
        }, {
          duration: 500
        });
      instructions.slideUp(500);
      showingInstructions = false;
    }

  };

  // If the user clicks Bob Ross' profile picture, toggle Bob Ross mode
  bobRoss.on("click", function() {

    resetBobRoss();
    clearForm(); // eslint-disable-line

    if (bobRossMode) {
      bobRoss.css("filter", "grayscale(50%)");
      toggleInstructions(false);
      bobRossMode = false;
      $("#new-tweet button").html("Tweet");
    } else {
      bobRoss.css("filter", "grayscale(0)");
      toggleInstructions(true);
      bobRossMode = true;
      quote = getQuote();
      $("#new-tweet button").html("Let's get crazy");
      toolTip.css("opacity", "1");
    }

  });

  // If bobRossMode is enabled, replace the user's input with Bob Ross quotes
  inputField.on("input", function(event) {

    const inputType = event.originalEvent.inputType;

    if (bobRossMode) {

      // If the user tries to delete a word (e.g., BACKSPACE), remove one word from the message
      if (inputType === "deleteContentBackward") {

        if (quoteIndex > 0) {
          quoteIndex -= 1;
        }
        message.pop();
        inputField.html(message.join(" "));

        // If the user removes the entire message, get a new quote
        const messageLength = message.join(" ").length;
        if (messageLength === 0) {
          resetBobRoss();
          clearForm(); // eslint-disable-line
        }

        // Add to the message until the limit is reached, otherwise, stop further input
      } else {

        if (quoteIndex < quote.length) {
          if (quote[quoteIndex] !== undefined) {
            message.push(quote[quoteIndex]);
            inputField.html(message.join(" "));
          }
          quoteIndex++;
        } else {
          inputField.html(message.join(" "));
        }

      }

      // Move cursor to the end
      focusEndInput();

    }

  });

  // Reset the message when the user presses ESC
  $(document).on("keydown", function(event) {

    if (bobRossMode) {
      if (event.key === "Escape") {
        resetBobRoss();
        clearForm(); // eslint-disable-line
      }

    }

  });

  // Hide the instructions when the user clicks on them
  $("#profile-header p").on("click", () => {

    if (showingInstructions) {
      toggleInstructions(false);
      toolTip.css("opacity", "0");
    }

  });

  // Reset the quote when a tweet is submitted
  $("#new-tweet form").on("submit", () => {

    if (bobRossMode) {
      resetBobRoss();
    }

  });

  // Show/hide the instructions tooltip on mouse enter/leave
  $("#profile-header").on("mouseenter", () => {

    if (showingInstructions) {
      toolTip.css("opacity", "0.8");
    }

  });

  $("#profile-header").on("mouseleave", () => {

    if (showingInstructions) {
      toolTip.css("opacity", "0");
    }

  });

  // Reset the form whenever toggled
  $(".compose").on("click", function() {

    if (bobRossMode) {
      resetBobRoss();
    }

  });

});