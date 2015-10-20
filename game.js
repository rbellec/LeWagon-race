
function runGame(){
  console.log("Lauch Game !");
  configureGame(30, 3, 3, 5);
  gameInteraction();
}


//------------------------------------------------------------------------
//------------------------- Game action handlers -------------------------
//------------------------------------------------------------------------

// Current and next are Jquery element pointing toward td.
var moveFromCellToCell = function (current,next){
  current.removeClass('active');
  next   .addClass(   'active');
}

// Move forward the Nth wagon.
// @param wagonIndex is an int starting on 0
var moveForward   = function(playerIndex){

  // 1 on crée la chaine de caractère séléctionnant le wagon sur la Nieme ligne.
  var selector    = 'tbody:nth-child(' + playerIndex + ') td.active';

  // On stocke l'élément Jquery pointant vers cette cellule et vers la cellule suivante.
  var currentCell = $(selector).first();
  var nextCell    = currentCell.next('td');

  if(nextCell.hasClass("finish_line")){
    console.log("Player " + playerIndex + " reached finish line !");
    $('html').off("keyup");
    $('#message').html('Finish ! press enter to play again.');
    $('html').on("keyup",function(event) {
      if (event.which == 13) {
        runGame();
      }
    });
  }

  // Le wagon avance : On l'efface de la cellule actuelle pour l'afficher sur la cellule suivante.
  moveFromCellToCell(currentCell, nextCell);

}

var gameInteraction = function(){
  $('html').off("keyup");
  $('html').on( "keyup",function(event) {
    if (event.which == 82) {
      moveForward(1);

    } else if (event.which == 89) {
      moveForward(2);
    } else {
      console.log("You are not pressing the right key dude");
    }
  });
};


//------------------------------------------------------------------------
//------------------------- Game  initialisation -------------------------
//------------------------------------------------------------------------

var generateTracks = function(trackLength, trackWidth){
  var lineContent = '';
  for(var i=0; i<trackLength; i++ ){
    lineContent +='<td></td>';
  }

  var line = '';
  for(var i=0; i<trackWidth; i++ ){
    line += '<tr>' + lineContent + '</tr>';
  }


  // On cherche les tracks.
  $("tbody.track").empty().append(line);

  // $("tbody.track").each(function() {
  //   $(this).empty();
  //   $(this).append(line);
  // });


}

// Fonction configurant le jeu :
// On définit la longeur des deux pistes
var configureGame  = function(trackLength, trackWidth, finish_1, finish_2){
  // Test that track length are below a limit.
  generateTracks(trackLength, trackWidth);

  var startLine = Math.ceil(trackWidth / 2);

  // set first case active
  $('tbody tr:nth-child(' + startLine + ') td:nth-child(1)').addClass("active");

  // set finish lines
  $('tbody:nth-child(1) td:nth-child(' + finish_1 + ')').addClass("finish_line");
  $('tbody:nth-child(2) td:nth-child(' + finish_2 + ')').addClass("finish_line");

  $('#message').html('PLAY !');

}




//------------------------------------------------------------------------
//------------------------- Game  launch !       -------------------------
//------------------------------------------------------------------------

$(document).ready(function() {
  runGame();
});


// r(ed) = 82
// y(ellow) = 89
