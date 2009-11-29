function Sound(path) {
  this.snd = document.createElement("audio");
  this.snd.src = path;
}
  
Sound.prototype.play = function() {
  this.snd.play();
}

Sound.prototype.pause = function() {
  this.snd.pause();
}

Sound.prototype.reset = function() {
  this.snd.currentTime = 0;
}

Sound.prototype.volume = function(amount) {
  if (amount) this.snd.volume = amount;
  else return this.snd.volume;
}

Sound.prototype.seek = function(time) {
  this.snd.currentTime = time;
}

Sound.prototype.tell = function() {
  return this.snd.currentTime;
}
