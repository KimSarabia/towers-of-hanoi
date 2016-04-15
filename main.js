'use strict';

var currentTower = false;

var towerId;
var $selectedDisk;

$(document).ready(init);

function init(){
    console.log('ready!');
    var $towers = $('.list');
    $towers.on('click', selectTower);
}

function selectTower(e){
  console.log('tower clicked!');
    var current = this.id;
    if (currentTower){
      console.log(currentTower);

        if (this.id === towerId){
        selectTower = false;
        $selectedDisk.removeClass('selected');
      } else{
        var higher = $selectedDisk.attr('id');
        var lower = $(this).children(":first").attr('id');

        if (!lower || checkIfAllowed(higher, lower)){
            $selectedDisk.remove();
            $(this).prepend($selectedDisk);
            currentTower = false;
            $selectedDisk.removeClass('selected');
        } else {
            currentTower = false;
            $selectedDisk.removeClass('selected');
        }
      }
    } else {
      $selectedDisk = $(this).children(":first");
      $selectedDisk.addClass("selected");
      currentTower = true;
      towerId = this.id;
  }
  isWinner();
}

function checkIfAllowed(higher, lower){
    console.log('Allowed:','Allowed')
    return parseInt(higher[4]) < parseInt(lower[4])
}

function isWinner(){
  console.log('win:','win');
  var count = $('#tower3').children().length;
  if(count === 3){
    return gameOver();
  }
}

function gameOver(){
  console.log('Announcement:','Winner!');
  $('#textbox').text("You win!");
}
