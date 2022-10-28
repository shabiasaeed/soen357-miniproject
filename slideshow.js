var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active1', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active1';
}



var modal = document.getElementById('myModal1');

var images = document.getElementsByClassName('modal-image');
var modalImg1 = document.getElementById('img01');

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
        modal.style.display = 'block';
        modalImg1.src = this.src;
    };
}
modal.onclick = function() {
    modal.style.display = 'none';
};


var modal2 = document.getElementById('myModal2');

var longImages = document.getElementsByClassName('long-image-modal');
var modalImg2 = document.getElementById('img02');

for(var i = 0; i< longImages.length; i++){
    longImages[i].onclick = function(){
      modal2.style.display = 'block';
      modalImg2.src = this.src;
    }

}

modal2.onclick = function() {
  modal2.style.display = 'none';
};




window.addEventListener('scroll', function(e) {
    var nav = document.getElementById('navBar');
    var links = document.getElementsByClassName('nav-bar-item')
    var logo = document.getElementById('navLogo');


    if (
        document.documentElement.scrollTop ||
        document.body.scrollTop > window.innerHeight
    ) {
        nav.classList.add('nav-black');
        nav.classList.remove('nav-white');
        for(var i = 0; i < links.length;i++){
          links[i].classList.add('nav-item-white');
          links[i].classList.remove('nav-item-black');
          logo.src = "assets/images/whiteData.png"

        }
    } else {
        nav.classList.add('nav-white');
        nav.classList.remove('nav-black');
        for(var i = 0; i < links.length;i++){
          links[i].classList.remove('nav-item-white');
          links[i].classList.add('nav-item-black');
          logo.src = "assets/images/d8ta.png"

        }
    }
});
