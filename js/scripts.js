$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    const hobby = $("#hobby").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const birthDay = $("#born").val();
    const favoriteColor = $("#color").val();
    const name = $("#name").val();

    const info = "Your name is " + name + ", you like to " + hobby + ", you like to drink " + flavor + ", you were born on " + birthDay + ", and your favorite color is " + favoriteColor
    
    $("#output").text(info);
  });
});