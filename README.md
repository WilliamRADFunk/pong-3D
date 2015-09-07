# pong-3D (09-2015)
A simple game of Pong using the 3D graphics wrapper library Three.js (WebGL)</br></br>

This game utilyzes the basic components of the Three.js library: sounds effects, cubes, planes, spheres, & 3Dtext. It has the various geometries and textures that go with those 3D objects.</br></br>

The AI player in this game has an slightly faster speed than that of the human player (to make it more challenging). It tracks the ball's x-coordinate and tries to match its own x-coordinate to it, limited by the above mentioned speed limit.</br></br>

A variety of angles are implemented based on where along the paddle the ball connects. This uses a rudimentary form of collision detection using global position of all the objects rather than sending messages from one objects to another.</br></br>

The sound effects were found at SoundBible.com and haven't been altered. They are all covered under the Attribution 3.0 license.
</br>1.mp3 === http://soundbible.com/2067-Blop.html
</br>2.mp3 === http://soundbible.com/1294-Button-Click-Off.html
</br>3.mp3 === http://soundbible.com/761-Switch.html
</br>4.mp3 === http://soundbible.com/759-Toggle.html
</br>applause1.mp3 === http://soundbible.com/468-Applause-Moderate-3-.html
</br>applause2.mp3 === http://soundbible.com/988-Applause.html
</br>applause3.mp3 === http://soundbible.com/2087-Audience-Applause.html
</br></br>

Each score is updated again by the same collision detection, but with the caveat that there is no collision with the paddle. Each point awarded to the player also decreases the player's paddle speed marginally (to create more of a challenge).</br></br>

Tested and functions in latest versions of the following browsers: Chrome, Firefox, Safari, and IE11.
