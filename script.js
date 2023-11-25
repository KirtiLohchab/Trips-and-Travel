// login popup

$(document).ready(function () {
  setTimeout(function () {
    $("#loginModal").mobal("show");
  }, 5000);
});

function bookNow() {
  var whereTo = document.getElementById("whereTo").value;
  var howMany = document.getElementById("howMany").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  var description = document.getElementById("description").value;

  if (whereTo && howMany && startDate && endDate && description) {
    alert("Booking successful!");
  } else {
    alert("Please fill in all fields.");
  }
}
