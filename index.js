var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Nav image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var nav = document.getElementsByClassName("nav");

    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    nav[slideIndex-1].className += " active";
  }

  var modal2 = document.getElementById('formSection');
        var btn2 = document.getElementById('formButton');
        var span = document.getElementsByClassName("close")[0];

        btn2.onclick = function () {
            modal2.style.display = "grid";
        }

        span.onclick = function () {
            modal2.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal2) {
                modal2.style.display = "none";
            }
        }

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}