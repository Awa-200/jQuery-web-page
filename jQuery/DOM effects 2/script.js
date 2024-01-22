$(document).ready(function () {
  // Append or Remove Item
  var isItemAdded = false;
  $("#append-remove-button").click(function () {
    var $ul = $("#append-target ul");
    if (isItemAdded) {
      $ul.children("li:last-child").remove();
      isItemAdded = false;
    } else {
      $ul.append("<li>New Item</li>");
      isItemAdded = true;
    }
  });

  // Replace Element
  var isImageShown = true;
  $("#replace-button").click(function () {
    var $target = $("#replace-target");
    if (isImageShown) {
      $target.html('<button>Click Me</button><p class="link">google.com</p>');
      isImageShown = false;
    } else {
      $target.html('<img id="image" src="dog.jpg" alt="Dog Image">');
      isImageShown = true;
    }
  });

  // Change Style
  $("#style-button").click(function () {
    $("#text").toggleClass("highlight");
  });

  // Change Image Source
  var isCat = false;
  $("#image-source-button").click(function () {
    var $image = $("#image-source");
    if (isCat) {
      $image.attr("src", "dog.jpg");
      isCat = false;
    } else {
      $image.attr("src", "cat.jpg");
      isCat = true;
    }
  });

  // Change Link
  var isGoogle = true;
  $("#link-button").click(function () {
    var $link = $("#link");
    if (isGoogle) {
      $link.attr("href", "https://www.facebook.com");
      $link.text("Web Link (Facebook)");
      isGoogle = false;
    } else {
      $link.attr("href", "https://www.google.com");
      $link.text("Web Link (Google)");
      isGoogle = true;
    }
  });

  // Change Text Content
  var originalText = $("#text-content").text();
  var newText = "New Text";
  var isOriginalText = true;
  $("#text-content-button").click(function () {
    var $text = $("#text-content");
    if (isOriginalText) {
      $text.text(newText);
      isOriginalText = false;
    } else {
      $text.text(originalText);
      isOriginalText = true;
    }
  });
});
