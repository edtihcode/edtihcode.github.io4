
"use strict";
console.log("Hello World!");
var images= ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"]

$(document).ready(function(){
  // $("#img1").click(function(){
  //   $("#img1").css("display", "none");
  //
  //     $("#lightbox").css("height","100%");
  //     $("#lightbox").css("width","100%");
  //     $("#lightbox").css("background","rgba(0,0,0, .75)");
  //     $("#lightbox").css("display","block");
  // })

var description =[
  "The 2008 race is an intercollegiate 2,400‐mile race from Texas to Calgary, Canada. Our solar car named Sunseeker was the only solar car in the race that incorporated a two motor design instead of one. The race lasted almost a month and we won the Sportsmanship Award for the race.",
  "The 2008 race is an intercollegiate 2,400‐mile race from Texas to Calgary, Canada. Our solar car named Sunseeker was the only solar car in the race that incorporated a two motor design instead of one. The race lasted almost a month and we won the Sportsmanship Award for the race.",
  "The 2008 race is an intercollegiate 2,400‐mile race from Texas to Calgary, Canada. Our solar car named Sunseeker was the only solar car in the race that incorporated a two motor design instead of one. The race lasted almost a month and we won the Sportsmanship Award for the race.",
  "The 2008 race is an intercollegiate 2,400‐mile race from Texas to Calgary, Canada. Our solar car named Sunseeker was the only solar car in the race that incorporated a two motor design instead of one. The race lasted almost a month and we won the Sportsmanship Award for the race.",
  "The objective of this project is to study what goes on in the combustion chamber of a micro jet turbine engine. A computational fluid dynamic software ,Fluent ANSYS was used to simulate this study. Physical properties such as velocity , pressure, density and temperature were studied.",
  "The objective of this project is to study what goes on in the combustion chamber of a micro jet turbine engine. A computational fluid dynamic software ,Fluent ANSYS was used to simulate this study. Physical properties such as velocity , pressure, density and temperature were studied",
  "The objective of this project is to study what goes on in the combustion chamber of a micro jet turbine engine. A computational fluid dynamic software ,Fluent ANSYS was used to simulate this study. Physical properties such as velocity , pressure, density and temperature were studied",
  "This project focuses on the conceptual designing of a commercial jet transport airplane. This airplane needs to compete with the commercial jets currently available in the market. The design needs to meet certain requirements that were demanded. The two main goals of the aircraft are fuel efficiency and low environmental impact while also meeting the long range flight requirement. Modern aircrafts were studied and current designing methods were used to determine the various specifications of the design.",
  "This project focuses on the conceptual designing of a commercial jet transport airplane. This airplane needs to compete with the commercial jets currently available in the market. The design needs to meet certain requirements that were demanded. The two main goals of the aircraft are fuel efficiency and low environmental impact while also meeting the long range flight requirement. Modern aircrafts were studied and current designing methods were used to determine the various specifications of the design.",
  "This project focuses on the conceptual designing of a commercial jet transport airplane. This airplane needs to compete with the commercial jets currently available in the market. The design needs to meet certain requirements that were demanded. The two main goals of the aircraft are fuel efficiency and low environmental impact while also meeting the long range flight requirement. Modern aircrafts were studied and current designing methods were used to determine the various specifications of the design."
];

  for (let i = 0; i < images.length; i++) {
    let currentImage = images[i];
    var imageID = "image" + i;
    // $("body").append("<img id='"+ imageID + "class='gallery' src='images/" + currentImage + "'alt='Image'/>");
    // $("body").append(`<img id='${imageID}' class='gallery' src='images/${currentImage}' alt='image'/>`);

    $("."+imageID).click(function(){
      $("body").append('<div id="lightbox"></div>');
      $("#lightbox").css({
        "position": "fixed",
        "top":"0",
        "left":"0",
        "text-align" : "center",
        "width" : "100%",
        "height": "100%",
        "background-color" :"rgba(0, 0, 0, .75)",
        "display": "block"
      });

      $("#lightbox").append(`<img src='images/${currentImage}' alt='Image'/>`);

      $("#lightbox").append(`<p id="desc">  ${description[i]} </p>`);

      $("#desc").css({
        "display": "block",
        "text-align" : "center",
        "color": "white"
      });
      $("#lightbox img").css("height","90%");
      $("#lightbox").click(function(){
          $("#lightbox").remove();
      });
    });

  }
  $(".gallery").css("width","200px");
  $(".gallery").css("margin-right", "10px");
});



// "Hello my name is " + myName;
// 'Hello my name is ${myName}';
