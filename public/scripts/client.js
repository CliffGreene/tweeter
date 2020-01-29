$(document).ready(function(){
 
  $("#sendForm").on('submit', function(event){
    event.preventDefault();
    
    $.ajax({
       method: "POST",
       url: "/tweets",
       data: $(this).serialize(),
     }).then(function(msg) {console.log(msg)})

    /*
     const loadTweets = function() {
      $.ajax("/tweets", { method: "GET "})
      .then(function(tub) {
        
        renderTweets(tub);
        
      });
     }; */
  
 //console.log(loadTweets())
  /*
  $(function() {
   
    const $button = $('#load-more-posts');
    $button.on('click', function () {
      console.log('Button clicked, performing ajax call...');
      $.ajax('more-posts.html', { method: 'GET' })
      .then(function (morePostsHtml) {
        console.log('Success: ', morePostsHtml);
        $button.replaceWith(morePostsHtml);
      });
    });
  */
  
});

const loadTweets = function() {
  $.ajax('/tweets', {method: "GET" })
  .then(function(data) {
    console.log(data)
    renderTweets(data);
    
  });
 };
loadTweets();

 let data = [
  
]

 const renderTweets = function(data) {
   
   let i = 0;
   while (i < data.length) {
      $('#tweets-container').append($(createTweetElement(data[i])));
     
      ++i
   }
   console.log(data[i]);
}
// loops through tweets
 // calls createTweetElement for each tweet
 // takes return value and appends it to the tweets container

 
 const createTweetElement = function(tweet) {
   let $tweet = $(`<article class="tweet" >  
   <header class="tweet-header">
     <div class="shadow">
       
     </div>
         <img class="tweet-avatar" src="${tweet.user["avatars"]}" 
         alt="/images/kisspng-avatar-education-professor-user-profile-faculty-boss-5abcab3d64aff2.9884136415223140454124.jpg">
         
         <p class="tweeter-name">${tweet.user["name"]}</p> <p class="tweeter-handle">${tweet.user["handle"]}</p>
         
     <h1 style="text-align: left">${tweet.content["text"]}</h1>
    
     
     <footer class="tweet-foot">
       <p class="date">${tweet.created_at}</p> 
       <p class="tweet-logos">logos</p>          
     </footer>

   </header>
   
 </article>` ).addClass('tweet');
   // ...
   return $tweet;
 }
 renderTweets(data);
})

     /*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

