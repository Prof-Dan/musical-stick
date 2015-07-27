var five = require('johnny-five');
var board = new five.Board
var keypress = require('keypress');
var tune = [];
var piezo;
var tone = 440;
board.on('ready', function() {

  piezo = new five.Piezo(3);

  keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {

  //console.log('press');

  if (key && key.ctrl && key.name == 'c') {
    process.exit(1);
  }

  if(key && key.name === 'space') {

    piezo.play({song:tune,tempo:100});

  }
  if(key && key.name === 'w') {

    tone *= 1.058;

  }
  if(key && key.name === 'a') {

    tone /= 1.058;

  }
  if(key && key.name === 's') {

    tune.push([tone, 1/2]);

  }

});

process.stdin.setRawMode(true);
process.stdin.resume();

});//wsa*space*
