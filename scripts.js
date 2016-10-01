$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/GETHIP/HW2-Template/master/grace.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.topFive, function(key, value){
      $("#topFive").append("<li>" + value.strength + "</li>");
    });
  });
});
