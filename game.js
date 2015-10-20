$(document).ready(function() {
  $('html').keyup(function(event) {
    if (event.which == 82) {
      $('tr:first-child td.active').next('td').addClass('active');
      $('.active').prev().removeClass('active');
    } else if (event.which == 89) {
      $('tr:nth-child(2) td.active').next('td').addClass('active');
      $('.active').prev().removeClass('active');
    } else {
      console.log("You are not pressing the right key dude");
    }
  });
});


// r(ed) = 82
// y(ellow) = 89
