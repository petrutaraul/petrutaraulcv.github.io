if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  AOS.init();
  // owl carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });
  // owl carousel start
  // alert('search is still in development')
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");

  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // var addToCartButtons = document.getElementsByClassName('shop-item-button');
  var addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClick);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClick);
  //

  $(".home-a").on("click", function (event) {
    var target = $("#home");
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $(".about-a").on("click", function (event) {
    var target = $("#about");
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $(".shop-a").on("click", function (event) {
    var target = $("#shop");
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $(".news-a").on("click", function (event) {
    var target = $("#news");
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $(".contact-a").on("click", function (event) {
    var target = $("#contact");
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  // api news start
  linkApi =
    "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=MZ6v9TSlTPA5KB6YTJaUdkOSJauOq4Xe";
  $.getJSON(linkApi, function (v2) {
    var article0 = 0;
    var title0 = v2.results[article0].title;
    var urlNews0 = v2.results[article0].url;
    var source0 = v2.results[article0].source;
    var image0 = v2.results[article0].media[0]["media-metadata"][0]["url"];

    var article1 = 1;
    var title1 = v2.results[article1].title;
    var urlNews1 = v2.results[article1].url;
    var source1 = v2.results[article1].source;
    var image1 = v2.results[article1].media[0]["media-metadata"][0]["url"];

    var article2 = 2;
    var title2 = v2.results[article2].title;
    var urlNews2 = v2.results[article2].url;
    var source2 = v2.results[article2].source;
    var image2 = v2.results[article2].media[0]["media-metadata"][0]["url"];

    $(".news-container .news0 .sourceUrl").attr("href", urlNews0);
    $(".news-container .news0 .img-url img").attr("src", image0);
    $(".news-container .news0 .title").append(title0);
    $(".news-container .news0 .published p span").append(source0);

    $(".news-container .news1 .sourceUrl").attr("href", urlNews1);
    $(".news-container .news1 .img-url img").attr("src", image1);
    $(".news-container .news1 .title").append(title1);
    $(".news-container .news1 .published p span").append(source1);

    $(".news-container .news2 .sourceUrl").attr("href", urlNews2);
    $(".news-container .news2 .img-url img").attr("src", image2);
    $(".news-container .news2 .title").append(title2);
    $(".news-container .news2 .published p span").append(source2);
  });
  // api news stop

  // scrolled scroll navbar
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 80) {
      $("#navbar-normal").addClass("scrolled-nav");
    } else {
      $("#navbar-normal").removeClass("scrolled-nav");
    }
  });

  $(".btn-purchase").click(function () {
    alert("Thanks for purchase");
  });
}

function purchaseClick() {
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCardPrice();
}

function removeCartItem(e) {
  var buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCardPrice();
}

function quantityChanged(e) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCardPrice();
}

function addToCartClick(e) {
  var button = e.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imgSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;

  addItemToCart(title, price, imgSrc);
  updateCardPrice();
}

function addItemToCart(title, price, imgSrc) {
  var cartRow = document.createElement("li");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemName = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemName.length; i++) {
    if (cartItemName[i].innerText == title) {
      alert(`${cartItemName[i].innerText} is already in jour CART`);
      return;
    }
  }
  var cartRowContent = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imgSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
    `;
  cartRow.innerHTML = cartRowContent;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCardPrice() {
  var couponSpan = document.getElementsByClassName("coupon-span")[0];
  var CartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = CartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    var inputCoupon = document.getElementsByClassName("coupon-input")[0];
    total = total + price * quantity;
  }
  var itemsLength = $("ul.cart-items li").length;
  total = Math.round(total * 100) / 100;
  if (total >= 200) {
    $(couponSpan).css("display", "block");
    total = Math.round(total - total * (30 / 100));
  } else if (total < 200) {
    total = Math.round(total);
    $(couponSpan).css("display", "none");
  }
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerText = ` $ ${total}`;
  document.getElementsByClassName(
    "itemsNumber"
  )[0].innerText = `${itemsLength} `;
}

// modal script start
// Get the modal
var modal = document.getElementById("ModalDiv");

// Get the button that opens the modal
var btn = document.getElementById("ModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeX")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// modal script stop
