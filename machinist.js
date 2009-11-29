function require(url) {
  var script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
}

function game(canvas, scene) {
  window.onload = function() {
//    require("key.js");
//    require("sprite.js");
//    require("sound.js");
    
    game.canvas = document.getElementById(canvas);
    game.ctx = game.canvas.getContext('2d');
    game.scene = scene;

    game.scene.init();
    setInterval(function() { game.scene.update(); }, 1000 / 60);
    setInterval(function() { game.scene.draw(); }, 1000 / 30);
  }
}

game.changeScene = function(scene) {
  game.scene = scene;
  game.scene.init();
}

function Actor(init, update, draw) {
  this.init = init || function() {};
  this.update = update || function() {};
  this.draw = draw || function() {
    this.sprite.draw(this.x, this.y);
  };
}

/*
 *  Scene takes a list of Actors
 */
function Scene() {
  this.actors = [];
  for (a in arguments) this.actors.push(arguments[a]);
}

Scene.prototype.init = function() {
  for (a in this.actors) this.actors[a].init();
}

Scene.prototype.update = function() {
  for (a in this.actors) this.actors[a].update();
}

Scene.prototype.draw = function() {
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  for (a in this.actors) this.actors[a].draw();
}
