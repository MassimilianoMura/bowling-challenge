function Frame() {
  this.rollCount = 0;


}

Frame.prototype.isInProgress = function() {
  if (this.rollCount < 2) {
    return true;
  }  else {
    return false;
  }
};

Frame.prototype.registerRoll = function() {
  this.rollCount++;

};