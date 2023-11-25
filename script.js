function bookNow() {
  var form = document.getElementById("bookingForm");

  // Additional validation for start date and end date
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);

  if (form.checkValidity() && startDate < endDate) {
    alert(" Thankyou your Booking is successful!");
  } else {
    form.classList.add("was-validated");
    if (startDate >= endDate) {
      alert("Start date must be less than end date.");
    }
  }
}
