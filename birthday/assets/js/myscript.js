window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;
  var targetScrollPosition = 40; // Adjust this value as needed

  if (scrollPosition > targetScrollPosition) {
    var header = document.querySelector("header");
    header.classList.add("bg-secondary2");
    var timeout = null;

    window.addEventListener("scroll", function () {
      clearTimeout(timeout);
      var header = document.querySelector("header");
      header.classList.add("active");
      header.classList.remove("bg-secondary2");
      timeout = setTimeout(function () {
        header.classList.remove("active");
        header.classList.add("bg-secondary2");
      }, 250);
    });
  } else {
    var header = document.querySelector("header");
    header.classList.remove("bg-secondary2");
    var timeout = null;
    window.addEventListener("scroll", function () {
      clearTimeout(timeout);
      var header = document.querySelector("header");
      header.classList.add("active");
      header.classList.add("bg-secondary2");
      timeout = setTimeout(function () {
        header.classList.remove("active");
        header.classList.remove("bg-secondary2");
      }, 250);
    });
  }
});


// Get all quantity input elements
const quantityInputs = document.querySelectorAll('.quantity-input');

// Loop through each quantity input
quantityInputs.forEach(function(quantityInput) {
  // Get the corresponding minus and plus buttons
  const minusBtn = quantityInput.parentElement.querySelector('.minus-btn');
  const plusBtn = quantityInput.parentElement.querySelector('.plus-btn');

  // Decrease the quantity on minus button click
  minusBtn.addEventListener('click', function() {
    let value = parseInt(quantityInput.value);
    value = isNaN(value) ? 0 : value;
    value = value <= 1 ? 1 : value - 1;
    quantityInput.value = value;
  });

  // Increase the quantity on plus button click
  plusBtn.addEventListener('click', function() {
    let value = parseInt(quantityInput.value);
    value = isNaN(value) ? 0 : value;
    value++;
    quantityInput.value = value;
  });
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


  var test = new Swiper(".test", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


  $(function () {
    $('.marquee').marquee({
        duration: 10000,
        delayBeforeStart: 0,
        duplicated: true,
        gap:0,
        pauseOnHover: true,
        startVisible: true
    });
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });