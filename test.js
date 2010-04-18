guy = {
  sprite: new Sprite("res/test.png"),
  sound: new Sound("res/test.ogg"),
  x: 0,
  y: 0,
  update: function() {
    if (key(keys.up)) this.y -= 4;
    if (key(keys.down)) this.y += 4;
    if (key(keys.left)) this.x -= 4;
    if (key(keys.right)) this.x += 4;
    
    if (key(keys.space)) this.sound.play();
  },
  draw: function() {
    this.sprite.draw(this.x, this.y);
  }
};

level1 = new Scene(guy);

game("canvas", level1);