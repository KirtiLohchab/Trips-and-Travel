function bookNow() {
  var form = document.getElementById("bookingForm");

  if (form.checkValidity()) {
    alert(" Thankyou your Booking is successful!");
  } else {
    form.classList.add("was-validated");
  }
}

$("#startDate")[0].min = new Date().toISOString().split("T")[0];

$("#endDate")[0].min = new Date(new Date().setDate(new Date().getDate() + 1))
  .toISOString()
  .split("T")[0];

$(".slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".move").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(document).ready(function () {
  $("#password").keyup(function () {
    if (checkLoginPassword()) {
      $("#pwdtext").html("<span style='color: green;'>Password Valid</span>");
    } else {
      $("#pwdtext").html(
        "<span style='color: red;'>Use uppercase, lowercase, number and special characters</span>"
      );
    }
  });
});

$(document).ready(function () {
  $("#loginEmail").keyup(function () {
    if (checkLoginEmail()) {
      $("#loginEmailtext").html(
        "<span style='color: green;'>E-mail Valid</span>"
      );
    } else {
      $("#loginEmailtext").html(
        "<span style='color: red;'>Enter your E-mail</span>"
      );
    }
  });
});
$(document).ready(function () {
  $("#registerEmail").keyup(function () {
    if (checkRegisterEmail()) {
      $("#regiEmailtext").html(
        "<span style='color: green;'>E-mail Valid</span>"
      );
    } else {
      $("#regiEmailtext").html(
        "<span style='color: red;'>Enter your E-mail</span>"
      );
    }
  });
});

$(document).ready(function () {
  $("#password1").keyup(function () {
    if (checkRegisterPassword()) {
      $("#loginpwdtext").html(
        "<span style='color: green;'>Password Valid</span>"
      );
    } else {
      $("#loginpwdtext").html(
        "<span style='color: red;'>Use uppercase, lowercase, number and special characters</span>"
      );
    }
  });
});

function checkLoginPassword() {
  let pwd = $("#password").val();
  let pwdExpression = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
  if (pwdExpression.test(pwd)) {
    return true;
  } else {
    return false;
  }
}
function checkLoginEmail() {
  let email = $("#loginEmail").val();
  let emailExpression = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailExpression.test(email)) {
    return true;
  } else {
    return false;
  }
}

function checkRegisterPassword() {
  let pwd = $("#password1").val();
  let pwdExpression = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
  if (pwdExpression.test(pwd)) {
    return true;
  } else {
    return false;
  }
}

function checkRegisterEmail() {
  let email = $("#registerEmail").val();
  let emailExpression = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailExpression.test(email)) {
    return true;
  } else {
    return false;
  }
}
