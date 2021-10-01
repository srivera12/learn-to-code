$(document).ready(function () {
  let el = document.getElementById("text");

  sQuery(".my-selector").addClass("MYNEWCLASS");
  sQuery("#main").addClass("Hello");

  $("#main").find("p").addClass("august");
  console.log($(".submenu a").first().text());
  console.log($(".submenu a").last().text());

  $(document).on("contextmenu", function () {
    return false;
  });

  $(document).on("mousedown", function (event) {
    switch (event.which) {
      case 1:
        console.log("Clicked the mousepad.");
        $("#context").css({
          display: "none",
        });
        break;
      case 3:
        console.log("Clicked the right mouse button");
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
        break;
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
    alert("You must click the button.");
  });

  $('[href="https://www.google.com/"]').on("click", function (event) {
    console.log("Linking to Google?");
  });

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
    if (action === "prepend") {
      console.log("Prepending...");
      $("#main").prepend("<a href='#'>" + content + "</a>");
    } else {
      if (action === "append") {
        console.log("Appending...");
        $("#main").append("<a href='#'>" + content + "</a>");
      } else {
        if (action === "replace") {
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
    console.log("Focused in on the text area.");
  });
  $("textarea").focusout(function () {
    console.log("Text area is no longer being focused on.");
  });
  window.hasAt = false;
  window.hasDot = false;
  $("input[name=email").on("keyup", function () {
    window.hasAt = $(this).val().indexOf("@") > -1;
    window.hasDot = $(this).val().indexOf(".") > -1;
    $("input").focusout(function () {
      if (window.hasAt && window.hasDot) {
        $(".status").html("Email address is accepted.");
      } else {
        $(".status").html("Email address is invalid");
      }
    });
  });
  $("input").css({
    background: "#f00",
    padding: "10px",
    borderColor: "#000",
  });
});
