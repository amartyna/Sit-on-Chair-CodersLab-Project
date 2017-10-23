$(document).ready(function() {

// DROPDOWN

  const dropdown = $(".dropped");
  const dropdownButton = $(".dropdown");
  dropdown.hide();

  dropdownButton.on('mouseenter', function() {
    dropdown.hide();
    dropdown.toggle();
  })
  dropdownButton.on('mouseleave', function() {
    dropdown.show();
    dropdown.toggle();
  })

// SLIDER

  const nextPicture = $('.slider_next');
  const prevPicture = $('.slider_previous');

  const slides = $('.slider_image li');

  let currentImage = 0;

  slides.eq(currentImage).show();
  slides.eq(currentImage - 1).hide();

  nextPicture.on('click', function(e) {

    slides.eq(currentImage).hide();
    currentImage++;

    if (currentImage >= slides.length) {
      currentImage = 0;
    }

    slides.eq(currentImage).show();

  });

  prevPicture.on('click', function(e) {

    slides.eq(currentImage).hide();

    currentImage--;

    if (currentImage < 0) {
      currentImage = slides.length - 1;
    }
    slides.eq(currentImage).show();

  });


// gallery


const galleryTitle = $('.gallery_photo-title');

  galleryTitle.on('mouseover', function() {

    galleryTitle.toggle();

  })




});
