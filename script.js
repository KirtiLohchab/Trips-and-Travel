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
