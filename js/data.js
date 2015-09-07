// Global variables necessary for constant table update & setup
var renderer;
var scene;
var camera;
var orbControls;
var startTime;
var WIDTH;
var HEIGHT;
var COMPSPEED = 0.055;
var PLAYERSPEED = 0.04;
var BALLSPEED = 0.12;
var xDir = 0.03;
var yDir = BALLSPEED;
var scoreObject1, scoreObject2,
	p1Score = "00", p2Score = "00",
	p1ScoreOld, p2ScoreOld;
var crowdCounter = 0;
var spectator01, spectator02, spectator03, spectator04, spectator05, 
	spectator06, spectator07, spectator08, spectator09, spectator10, 
	spectator11, spectator12, spectator13, spectator14, spectator15, 
	spectator16, spectator17, spectator18, spectator19, spectator20,
	spectator21, spectator22, spectator23, spectator24, spectator25, 
	spectator26, spectator27, spectator28, spectator29, spectator30, 
	spectator31, spectator32, spectator33, spectator34, spectator35, 
	spectator36, spectator37, spectator38, spectator39, spectator40;
var spectatorFlag = [ 0 ];
var paddle1, paddle2, ball;
var applause1, applause2, applause3, one, two, three, four;