function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
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