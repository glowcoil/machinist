function Sprite(path) {
  this.img = new Image();
  this.img.src = path;
  
  this.sclX = 1; this.sclY = 1;
}

Sprite.prototype.draw = function(x, y) {
  game.ctx.save();
  game.ctx.scale(this.sclX, this.sclY);
  game.ctx.drawImage(this.img, x, y);
  game.ctx.restore();
};

Sprite.prototype.scale = function(x, y, relative) {
  if (x && y) {
    if (relative) {
      this.sclX *= x;
      this.sclY *= y;
    } else {
      this.sclX = x;
      this.sclY = y;
    }
  } else return [sclX, sclY];
};

Sprite.prototype.scaleX = function(amount, relative) {
  if (amount) {
    if (relative) this.sclX *= amount;
    else this.sclX = amount;
  } else return this.sclX;
};

Sprite.prototype.scaleY = function(amount, relative) {
  if (amount) {
    if (relative) this.sclY *= amount;
    else this.sclY = amount;
  } else return this.sclY
};
