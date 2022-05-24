function myFunction() {
    var x = document.getElementById("sidebar");
    if (x.className === "sidebar close") {
      x.className = "sidebar opened";
    } else {
      x.className = "sidebar close";
    }
  }
function closeside() {
    var x = document.getElementById("sidebar");
    if (x.className === "sidebar opened") {
      x.className = "sidebar close";
    } else{
      x.className = "sidebar opened";
    }
  }

  function homedrop() {
    var x = document.getElementById("homedwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function pagedrop() {
    var x = document.getElementById("pagedwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function shopdrop() {
    var x = document.getElementById("shopdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function shop_pro_drop() {
    var x = document.getElementById("pro_types");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function shop_pages_drop(){
    var x = document.getElementById("shop_pages");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function shop_types_drop(){
    var x = document.getElementById("shop_types");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function shop_lay_drop(){
    var x = document.getElementById("shop_layouts");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function portdrop(){
    var x = document.getElementById("portfolio");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function port_lay_drop(){
    var x = document.getElementById("portfoilo_lay");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function port_single_drop(){
    var x = document.getElementById("portfolio_single");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function blogdrop() {
    var x = document.getElementById("blog");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function post_types_drop(){
    var x = document.getElementById("post_types");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function elemdrop() {
    var x = document.getElementById("elements");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function classic_drop(){
    var x = document.getElementById("classic");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function info_drop(){
    var x = document.getElementById("infographic");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function interactive_drop(){
    var x = document.getElementById("interacvite");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function typo_drop(){
    var x = document.getElementById("typography");
    if (x.className === "sub_side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown-content";
    }
  }
  function cat_drop(){
    var x = document.getElementById("categories_content");
    if (x.className === "categories_content") {
      x.className += " opened";
    } else {
      x.className = "categories_content";
    }
  }

var nav = document.getElementById("myTopnav");
var btns = nav.getElementsByClassName("dropdown_button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


var dots = document.getElementById("dots");
var btns = dots.getElementsByClassName("fa-circle");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("working");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" working", "");
  }
  this.className += " working";
  });
}


filterSelection("alls");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter-item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filter_btns");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active_filter");
    current[0].className = current[0].className.replace(" active_filter", "");
    this.className += " active_filter";
  });
}
var btnContainer = document.getElementById("filter_btns");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active_filters");
    current[0].className = current[0].className.replace(" active_filters", "");
    this.className += " active_filters";
  });
}

$(document).ready(function(){
  $('.slick-carousel-items').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4500,
        cssEase: 'linear',
        arrows: false,
  });
});
