// Global variables necessary for constant table update & setup
var renderer;				// Object containing elements to auto-update.
var scene;					// Object that contains all Three.js objects.
var camera;					// Player's view point.
var WIDTH;					// Width of screen at time of page load.
var HEIGHT;					// Height of screen at time of page load.
var COMPSPEED = 0.055;		// Speed at which computer paddle can move.
var PLAYERSPEED = 0.04;		// Speed at which player paddle can move.
var BALLSPEED = 0.12;		// Speed at which ball can move. 
var xDir = 0.03;			// Speed ball is moving in x direction.
var yDir = BALLSPEED;		// Speed ball is moving in y direction.
var scoreObject1;			// Graphical 3D text object for player's score.
var scoreObject2;			// Graphical 3D text object for computer's score.
var p1Score = "00";			// Keeps track of player's new score.
var p2Score = "00";			// Keeps track of computer's new score.
var	p1ScoreOld;				// Keeps track of player's score from previous frame.
var p2ScoreOld;				// Keeps track of computer's score from previous frame.
var crowdCounter = 0;		// Controls speed at which the crowd moves.
var spectator01;			// Object containing one unique spectator.
var spectator02;			// Object containing one unique spectator.
var spectator03;			// Object containing one unique spectator.
var spectator04;			// Object containing one unique spectator.
var spectator05;			// Object containing one unique spectator.
var	spectator06;			// Object containing one unique spectator.
var spectator07;			// Object containing one unique spectator.
var spectator08;			// Object containing one unique spectator.
var spectator09;			// Object containing one unique spectator.
var spectator10; 			// Object containing one unique spectator.
var	spectator11;			// Object containing one unique spectator.
var spectator12;			// Object containing one unique spectator.
var spectator13;			// Object containing one unique spectator.
var spectator14;			// Object containing one unique spectator.
var spectator15;			// Object containing one unique spectator.
var	spectator16;			// Object containing one unique spectator.
var spectator17;			// Object containing one unique spectator.
var spectator18;			// Object containing one unique spectator.
var spectator19;			// Object containing one unique spectator.
var spectator20;			// Object containing one unique spectator.
var	spectator21;			// Object containing one unique spectator.
var spectator22;			// Object containing one unique spectator.
var spectator23;			// Object containing one unique spectator.
var spectator24;			// Object containing one unique spectator.
var spectator25; 			// Object containing one unique spectator.
var	spectator26;			// Object containing one unique spectator.
var spectator27;			// Object containing one unique spectator.
var spectator28;			// Object containing one unique spectator.
var spectator29;			// Object containing one unique spectator.
var spectator30; 			// Object containing one unique spectator.
var	spectator31;			// Object containing one unique spectator.
var spectator32;			// Object containing one unique spectator.
var spectator33;			// Object containing one unique spectator.
var spectator34;			// Object containing one unique spectator.
var spectator35;			// Object containing one unique spectator.
var	spectator36;			// Object containing one unique spectator.
var spectator37;			// Object containing one unique spectator.
var spectator38;			// Object containing one unique spectator.
var spectator39;			// Object containing one unique spectator.
var spectator40;			// Object containing one unique spectator.
var spectatorFlag = [ 0 ];	// Ensures moved spectator returns to original position.
var paddle1;				// Player's paddle.
var paddle2;				// computer's paddle.
var ball;					// The game ball.
var applause1;				// Sound effect to play when point is scored.
var applause2;				// Sound effect to play when point is scored.
var applause3;				// Sound effect to play when point is scored.
var one;					// Sound effect to play when ball hits player's paddle.
var two;					// Sound effect to play when ball hits computer's paddle.
var three;					// Sound effect to play when ball hits left bounding wall.
var four;					// Sound effect to play when ball hits right bounding wall.
var mouseX = 0;				// X position for mouse or touch to control paddle movement.