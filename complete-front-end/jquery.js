$(document).ready(function () {
  // says ready is "depreciated", I'm guessing no longer in use? The version from the videos is
  // 3.2.1 and the one I downloaded is 3.6.0
  // guy is very inconsistent with when he uses '' and ""
  let el = document.getElementById("text");

  sQuery('.my-selector').addClass("MYNEWCLASS");
  sQuery('#main').addClass("Hello");

  $("#main").find("p").addClass("august");
  console.log($(".submenu a").first().text());
  console.log($(".submenu a").last().text());

  $(document).on("contextmenu", function () {
    return false;
  });

  $(document).on("mousedown", function (event) {
    switch (event.which) {
      // deprecated - what do we do now?
      case 1:
        console.log("Clicked the mousepad.");
        break;
      case 3:
        console.log("Clicked the right mouse button");
        break;
    }
    // correct to use == here? or should be ===?
    if (event.which == 3) {
      // deprecated
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
    // correct to use == here? or should be ===?
    if (event.which == 1) {
      // deprecated
      $("#context").css({
        display: "none",
      });
    }
  });

  alert("Loaded");

  $("#text").html("This is my text.");

  $("#go-button").on("click", function () {
    alert(
      "Really? You just clicked the button? That's not very smart, this could have been a trap."
    );
  });

  $("#go-button").hover(function () {
    // deprecated - what do we use now?
    alert("You must click the button.");
  });

  // for some reason does not accept e or event here, though it works below
  // works by id, but not href - why?
  // because there was a / at the end of the link in html, but not here
  $('[href="https://www.google.com/"]').on("click", function (event) {
    console.log("Linking to Google?");
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
    // correct to use == here? or should be ===?
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

  $('p:contains("Lorem")').html(
    "This had 'Lorem' in it. Surprisingly, somehow it still does."
  );

  console.log($(".status").is("img"));
  console.log($(".status").is("p"));

  if ($(':contains("Lorem")').first("p")) {
    console.log("Lorem is in a paragraph.");
  }

  console.log($(':contains("text")').hasClass("status"));

  $("p").each(function () {
    console.log($(this).text());
  });

  $("textarea").focusin(function () {
    // deprecated - what do we do now?
    console.log("Focused in on the text area.");
  });
  $("textarea").focusout(function () {
    // deprecated - what do we do now?
    console.log("Text area is no longer being focused on.");
  });
  window.passed = 0;
  window.hasAt = 0;
  window.hasDot = 0;
  // the console issue again - checking wasn't working
  // was able to check by using console.log below
  $("input[name=email").on("keyup", function () {
    if ($(this).val().indexOf("@") > -1) {
      hasAt++;
    }
    if ($(this).val().indexOf(".") > -1) {
      hasDot++;
    }
    $("input").focusout(function () {
      // he did this differently - erased all this and used indexOf, had some issues
      if (window.hasAt > 1 && window.hasDot > 1) {
        $(".status").html("Email address is accepted.");
      } else {
        $(".status").html("Email address is invalid");
      }
    });
  });
  // lol he ended up doing this at the end - apparently what the lesson was workign towards
  $("input").focusout(function () {
    // deprecated
    console.log("window.passed = " + window.passed);
  });
  $('input').css( {
    background: '#f00',
    padding: '10px',
    borderColor: '#000',
  })
});
