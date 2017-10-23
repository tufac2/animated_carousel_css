$(document).ready(function() {
    // Carousel logic
    $('#quotes-carousel').on('click', '.next', showNextQuoteClick);
    $('#quotes-carousel').on('click', '.previous', showPreviousQuoteClick);


  /* Carousel stuff */
  function showNextQuoteClick() {
    window.carouselRunning = false;
    clearTimeout(window.restartingCarousel);
    showNextQuote();
    restartAutomatic();
  }

  function showPreviousQuoteClick() {
    window.carouselRunning = false;
    clearTimeout(window.restartingCarousel);
    showPreviousQuote();
    restartAutomatic();
  }

  function restartAutomatic() {
    clearTimeout(window.restartingCarousel);
    window.restartingCarousel = setTimeout(function() {
      window.carouselRunning = true;
    }, 10000);
  }

  function showNextQuote() {
    var allQuotes = $('#quotes-carousel').find('.quote'),
        current = $('#quotes-carousel').find('.current'),
        previous = $('#quotes-carousel').find('.previous'),
        next = $('#quotes-carousel').find('.next');
    $(current).removeClass('current').addClass('previous');
    $(next).removeClass('next').addClass('current');
    $(previous).removeClass('previous').addClass('remove-left');
    setTimeout(function() {
      $(previous).removeClass('remove-left');
    }, 1000);
    // Work out what should now be the "next" item
    $(allQuotes).each(function(index, item) {
      if ($(item).hasClass('current')) {
        if (allQuotes[index + 1]) {
          $(allQuotes[index + 1]).addClass('next').removeClass('remove-left');
        } else {
          $(allQuotes[0]).addClass('next').removeClass('remove-left');
        }
      }
    });
  }

  function showPreviousQuote() {
    var allQuotes = $('#quotes-carousel').find('.quote'),
        current = $('#quotes-carousel').find('.current'),
        previous = $('#quotes-carousel').find('.previous'),
        next = $('#quotes-carousel').find('.next');
    $(current).removeClass('current').addClass('next');
    $(previous).removeClass('previous').addClass('current');
    $(next).removeClass('next');
    // Work out what should now be the "next" item
    $(allQuotes).each(function(index, item) {
      if ($(item).hasClass('current')) {
        if (allQuotes[index - 1]) {
          $(allQuotes[index - 1]).addClass('place-left');
          setTimeout(function() {
            $(allQuotes[index - 1]).addClass('previous').removeClass('place-left');
          }, 10);
        } else {
          $(allQuotes[allQuotes.length - 1]).addClass('place-left');
          setTimeout(function() {
            $(allQuotes[allQuotes.length - 1]).addClass('previous').removeClass('place-left');
          }, 10);
        }
      }
    });
  }
});
