$(document).ready(function () {
  // CSS Manipulation
  $("#change-color").click(function () {
    var box = $("#change-color-box");
    if (box.css("background-color") === "rgb(255, 0, 0)") {
      box.css("background-color", "blue");
    } else {
      box.css("background-color", "red");
    }
  });

  $("#change-size").click(function () {
    var box = $("#change-size-box");
    if (box.css("width") === "150px") {
      box.css("width", "100px");
      box.css("height", "100px");
    } else {
      box.css("width", "150px");
      box.css("height", "150px");
    }
  });

  $("#change-text").click(function () {
    var box = $("#change-text-box");
    if (box.text() === "New Text") {
      box.text("Click to Change Text");
    } else {
      box.text("New Text");
    }
  });

  // JavaScript Effects
  $("#fade-in").click(function () {
    var box = $("#fade-in-box");
    if (box.css("opacity") === "0") {
      box.fadeTo("slow", 1);
    } else {
      box.fadeTo("slow", 0);
    }
  });

  $("#slide-toggle").click(function () {
    $("#slide-toggle-box").slideToggle();
  });

  $("#animate").click(function () {
    var box = $("#animate-box");
    if (box.hasClass("animated")) {
      box.removeClass("animated");
      box.animate(
        {
          opacity: 1,
          width: "100px",
          height: "100px",
        },
        1000
      );
    } else {
      box.addClass("animated");
      box.animate(
        {
          opacity: 0.5,
          width: "200px",
          height: "200px",
        },
        1000
      );
    }
  });

  // HTML Events
  var clickCount = 0;
  $("#click-event").click(function () {
    clickCount++;
    $("#click-box").html(
      "<p>Click Event Triggered: " + clickCount + " times</p>"
    );
  });

  $("#hover-event").hover(
    function () {
      $(this).text("Hovering");
    },
    function () {
      $(this).text("Hover Here");
    }
  );

  $("#keypress-event").keypress(function (event) {
    var key = String.fromCharCode(event.which);
    $("#keypress-box").html("<p>Keypress Event Triggered: " + key + "</p>");
  });
});
