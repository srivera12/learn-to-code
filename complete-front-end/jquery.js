$(document).ready(function () {
  // says ready is "depreciated", I'm guessing no longer in use? The version from the videos is
  // 3.2.1 and the one I downloaded is 3.6.0
  let el = document.getElementById("text");

  gQuery("my-selector").addClass("MYNEWCLASS")

  $(document).on("contextmenu", function () {
    return false;
  });

  $(document).on("mousedown", function (event) {
    switch (event.which) {
      case 1:
        console.log("Clicked the mousepad.");
        break;
      case 3:
        console.log("Clicked the right mouse button");
        break;
      // included additonal cases for right click, etc., but was not registering right clicks
      // on my laptop, also why below is set to 1, for "normal" clicks
    }
    if (event.which == 3) {
      $(".hidden").removeClass("shown");
      if ($(event.target).is("img")) {
        $(".saveimg, .newtab").addClass("shown");
      } else if ($(event.target).is("a")) {
        $(".newtab").addClass("shown");
      }
      console.log(event.pageY, event.pageX);
      $("#context").css({
        top: event.pageY,
        left: event.pageX,
      });
      $("#context").fadeIn();
    }
    // The bit below, to have the menu disappear, is my own method I figured out, not the video's
    // Not sure why it doesn't work for normal mouse clicks though?
    // I'll change it back to 'mouseleave' cause I liked that better anyway.
    if (event.which == 1) {
      $("#context").css({
        display: "none",
      });
    }
    // This is how he did it:
    // return false;
    // $('#context').fadeOut();
  });

  alert("Loaded");

  $("#text").html("This is my text.");

  $("#go-button").on("click", function () {
    alert(
      "Really? You just clicked the button? That's not very smart, this could have been a trap."
    );
  });

  $("#go-button").hover(function () {
    alert("You must click the button.");
  });

  // for some reason does not accept e or event here, though it works below
  // works by id, but not href - why?
  // because there was a / at the end of the link in html, but not here
  $('[href="https://www.google.com/"]').on("click", function (event) {
    console.log("Linking to Google?");
    event.preventDefault();
  });

  // not super clear about what a data trigger is - must be important because the special []
  $('[data-trigger="dropdown"]').on("mouseenter", function () {
    let submenu = $(this).parent().find(".submenu");
    submenu.addClass("active");

    $(".profile-menu").on("mouseleave", function () {
      submenu.removeClass("active");
    });
  });

  $("#append, #prepend, #replace").on("click", function (e) {
    let el = $(e.currentTarget);
    let action = el.attr("id");
    let content = $(".my-text").val();

    if (action == "prepend") {
      console.log("Prepending...");
      $("#main").prepend("<a href='#'>" + content + "</a>");
    } else {
      if (action == "append") {
        console.log("Appending...");
        $("#main").append("<a href='#'>" + content + "</a>");
      } else {
        if (action == "replace") {
          console.log("Replacing...");
          $("#main").html("<a href='#'>" + content + "</a>");
        }
      }
    }
    $(".my-text").val("");
  });
});
