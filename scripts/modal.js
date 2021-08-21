$(document).ready(function() {
    // MODAL
    var modalText = {
      todoapp: {
        title: 'To do App',
        tag: 'TO DO LIST',
        detail:
          'To do list app is used add and organize tasks fast. Also we can remove task or can update it easily.',
        link: 'https://manisha-to-do-app-react-05-06-2021.netlify.app/'
      },
      expensetracker: {
        title: 'ExpenseTracker',
        tag: 'EXPENSE CALCULATOR.',
        detail:
          'Expense Tracker offers transaction management, transaction tracking, and transaction history to companies for internal use. A Javascript companion site for the Expense Tracker App.',
          link: 'https://expense-tracker-ee4540.netlify.app/'
      },
      burgerbar: {
        title: 'Burger Bar',
        tag: 'BURGER ORDERING PLATFORM.',
        detail:
          ' Burger Bar is a platform where customer discover new varieties of burger.',
        link: '#'
      },
      weatherforecast: {
        title: 'Weather Forecast',
        tag: 'Weather Prediction.',
        detail:
          ' Weather Forecasting provides weather for different cities which we want to find we can search.Hosted site written in Html,css and Javascript.',
        link: 'https://weather-forecasting-mantri-71a841.netlify.app/'
      },
      rockpaperscissor: {
        title: 'Rock Paper Scissor',
        tag: 'ROCK PAPER SCISSOR',
        detail:
          'Rock paper scissor game is very famous. Its very interesting game and it is written in vanilla javascript.',
          link: 'https://rock-paper-secissor-26-04-2021-7de1c8.netlify.app/'
      }
    };
  
    $('#gallery .button').on('click', function() {
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
    });
  
    $('.close').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    $('.mask').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    var carousel = $('#carousel'),
      slideWidth = 350,
      threshold = slideWidth / 3,
      dragStart,
      dragEnd;
  
    setDimensions();
  
    $('#next').click(function() {
      shiftSlide(-1);
    });
    $('#prev').click(function() {
      shiftSlide(1);
    });
  
    carousel.on('mousedown', function() {
      if (carousel.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function() {
        dragEnd = event.pageX;
        $(this).css('transform', 'translateX(' + dragPos() + 'px)');
      });
      $(document).on('mouseup', function() {
        if (dragPos() > threshold) {
          return shiftSlide(1);
        }
        if (dragPos() < -threshold) {
          return shiftSlide(-1);
        }
        shiftSlide(0);
      });
    });
  
    function setDimensions() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        slideWidth = $(window).innerWidth();
      }
      $('.carousel-wrap, .slide').css('width', slideWidth);
      $('.modal').css('max-width', slideWidth);
      $('#carousel').css('left', slideWidth * -1);
    }
  
    function dragPos() {
      return dragEnd - dragStart;
    }
  
    function shiftSlide(direction) {
      if (carousel.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup');
      carousel
        .off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + direction * slideWidth + 'px)');
      setTimeout(function() {
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition');
        carousel.css('transform', 'translateX(0px)');
      }, 700);
    }
  
    function fillModal(id) {
      $('#modal .title').text(modalText[id].title);
      $('#modal .detail').text(modalText[id].detail);
      $('#modal .tag').text(modalText[id].tag);
      if (modalText[id].link)
        $('#modal .button')
          .addClass('visible')
          .parent()
          .attr('href', modalText[id].link);
  
      $.each($('#modal li'), function(index, value) {
        $(this).text(modalText[id].bullets[index]);
      });
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background:
            "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
          backgroundSize: 'cover'
        });
      });
    }
  });