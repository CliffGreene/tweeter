$(document).ready(function() {
 
  $("#sendForm").on('submit', function(event) {
    
    event.preventDefault();
    $("#emptyError").fadeOut(2000);
    $("#lengthError").fadeOut(1000);
    let charcount = $(this).serialize();
    if (charcount.length > 145) {
      
      $("#lengthError").fadeIn(1000);
       
    } else if (charcount.length < 6) {
      $("#emptyError").fadeIn(1000);
    } else {
      $("#tweetError").css("display","none");
      $('#emptyError').css("visibility", "hidden");
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize(),
      }).then(function(msg) {
        loadTweets(msg);
        $("textarea").val('');
        $(".counter").text(140);
      });
    }
  });

  if ($("#sendForm"))

    $("#composeButton").on("click", function() {
      if ($("#sendForm").is(":visible")) {
        $("#sendForm").slideUp("slow");
      } else {
        $("#sendForm").slideDown("slow");
    
      }
    });
  const loadTweets = function() {
    $.ajax('/tweets', {method: "GET" })
      .then(function(data) {
    
        renderTweets(data);
    
      });
  };
  loadTweets();

  let data = [
  
  ];

  const renderTweets = function(data) {
  
    $('#tweets-container').empty();
   
    for (const tweet of data) {
      $('#tweets-container').prepend($(createTweetElement(tweet)));
     
     
    }
   
  };

  const daysAgo = function(num) {
    let numOfDays = Math.floor((new Date() - new Date(num)) / 86400000);
    if (numOfDays === 0) {
      return ("Today");
    } else if (numOfDays === 1) {
      return ("Yesterday");
    } else return `${numOfDays} days ago`;
  };
 
 

  const createTweetElement = function(tweet) {
    let $tweet = $(`<article class="tweet" >  
   <header class="tweet-header" id="eachTweet">
    
       
     </div>
         <img class="tweet-avatar" src="${tweet.user["avatars"]}" 
         alt="/images/kisspng-avatar-education-professor-user-profile-faculty-boss-5abcab3d64aff2.9884136415223140454124.jpg">
         
         <p class="tweeter-name">${tweet.user["name"]}</p> <p class="tweeter-handle">${tweet.user["handle"]}</p>
         
     <h1 style="text-align: left">${tweet.content["text"]}</h1>
    
     
     <footer class="tweet-foot">
       <p class="date">${daysAgo(tweet.created_at)}</p> 
       <i class="fab fa-font-awesome-flag"></i>
       <i class="fas fa-retweet"></i>
       <i class="far fa-thumbs-up"></i>
        </footer>

   </header>
   
 </article>`).addClass('tweet');
    // ...
    return $tweet;
  };
  renderTweets(data);
});

