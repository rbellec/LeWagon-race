

// Current and next are Jquery element pointing toward td.
var moveFromCellToCell = function (current,next){
  current.removeClass('active');
  next   .addClass(   'active');
}

// Move forward the Nth wagon.
// @param wagonIndex is an int starting on 0
var moveForward   = function(playerIndex){

  // 1 on crée la chaine de caractère séléctionnant le wagon sur la Nieme ligne.
  var selector    = 'tr:nth-child(' + playerIndex + ') td.active';

  // On stocke l'élément Jquery pointant vers cette cellule et vers la cellule suivante.
  var currentCell = $(selector).first();
  var nextCell    = currentCell.next('td');

  if(nextCell.hasClass("finish_line")){
    console.log("Player " + playerIndex + " reached finish line !");
    $('html').off("keyup");
  }

  // Le wagon avance : On l'efface de la cellule actuelle pour l'afficher sur la cellule suivante.
  moveFromCellToCell(currentCell, nextCell);

}

var gameInteraction = function(){
  $('html').on("keyup",function(event) {
    if (event.which == 82) {
      moveForward(1);

    } else if (event.which == 89) {
      moveForward(2);
    } else {
      console.log("You are not pressing the right key dude");
    }
  });
};


$(document).ready(function() {
  gameInteraction();
});


// r(ed) = 82
// y(ellow) = 89
