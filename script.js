function bookNow() {
  var form = document.getElementById("bookingForm");

  // Additional validation for start date, end date, and future date
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);
  var currentDate = new Date();

  if (
    form.checkValidity() &&
    startDate < endDate &&
    startDate >= currentDate &&
    endDate >= currentDate
  ) {
    alert(" Thankyou your Booking is successful!");
  } else {
    form.classList.add("was-validated");

    if (startDate >= endDate) {
      alert("Start date must be less than end date.");
    }

    if (startDate < currentDate) {
      alert("Start date must be in the future.");
    }

    if (endDate < currentDate) {
      alert("End date must be in the future.");
    }
  }
}
