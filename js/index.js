$(document).ready(function() { 
  var quoteArr = [];
  var index;

  
  $("#quote-button").click(function() {
    $("#quote-text").addClass("animated shake");
    
    $("#quote-text").html(function() {
        quoteArr = ["Is that some kind of Eastern sh*t?",  "Careful, man, there's a beverage here!", "Nobody. F***s. With the Jesus!", "I am not Mr. Lebowski. YOU'RE Mr. Lebowski. I'm the Dude. So that's what you call me.", "A wiser man than myself once said, 'Sometimes you eat the bar, sometimes, the bar eats you.", "You want a toe? I can get you a toe, believe me. There are ways, Dude. You don't wanna know about it, believe me.", "I don't roll on Shabbos!", "I had buddies who died face-down in the muck so you and I could enjoy this family restaurant!", "F*** it, Dude. Let’s go bowling.", "That rug really tied the room together, did it not?" ]
        var index = Math.floor(Math.random() * 10); 
        return quoteArr[index];
    });
  });
  
  $("#tweet-button").click(function() {
    var quotedText = $("#quote-text").html();    
    $('a#tweet-button').each(function() {
      var value = $(this).attr('href');
      var newValue = $(this).attr('href', value.replace('#/','http://twitter.com/home/?status=' + '"' + quotedText + '" via @n8finch'));
      /*alert(quotedText);*/
    });
  
});
  
});