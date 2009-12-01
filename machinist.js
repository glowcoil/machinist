function game(canvas, scene) {
  window.onload = function() {
    game.canvas = document.getElementById(canvas);
    game.ctx = game.canvas.getContext('2d');
    game.scene = scene;
    
    setInterval(function() { game.scene.update(); }, 1000 / 60);
    setInterval(function() { game.scene.draw(); }, 1000 / 60);
  }
}

game.changeScene = function(scene) {
  game.scene = scene;
}

// Scene takes a list of actors
function Scene() {
  this.actors = [];
  for (a in arguments) this.actors.push(arguments[a]);
}

Scene.prototype.update = function() {
  for (a in this.actors) this.actors[a].update();
}

Scene.prototype.draw = function() {
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  for (a in this.actors) {
    if (this.actors[a].draw) this.actors[a].draw();
    else this.actors[a].sprite.draw(this.actors[a].x, this.actors[a].y);
  }
}
