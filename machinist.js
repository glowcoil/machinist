function load(u) {
  for (var a = 0; a < arguments.length; ++a) {
    var scriptTag = document.createElement("script");
    scriptTag.src = arguments[a];
    scriptTag.type = "text/javascript";
    body = document.getElementsByTagName("body")[0];
    body.appendChild(scriptTag);
  }
}

load( "key.js"
    , "sprite.js"
    , "sound.js" );

function game(canvas, scene) {
  game.canvas = document.getElementById(canvas);
  game.ctx = game.canvas.getContext('2d');
  game.scene = scene;
  
  setInterval(function() { game.scene.update(); game.scene.draw(); }, 1000 / 60);
}

game.changeScene = function(scene) {
  game.scene = scene;
  for (k in key.used) key.used[k] = false;
}

// Scene takes a list of actors
function Scene() {
  this.actors = [];
  for (var a = 0, l = arguments.length; a < l; ++a) this.actors[a] = arguments[a];
  for (var a in this.actors) {
    if (!this.actors[a].draw) this.actors[a].draw = function() { this.sprite.draw(this.x, this.y); };
  }
}

Scene.prototype.update = function() {
  for (a in this.actors) {
    if (this.actors[a].update) this.actors[a].update();
  }
}

Scene.prototype.draw = function() {
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  for (a in this.actors) {
    this.actors[a].draw();
  }
}
