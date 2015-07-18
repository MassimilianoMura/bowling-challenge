function Frame() {
  this.rollsRemaining = 2;
  this.score = 0;
};


Frame.prototype.isInProgress = function() {
  return (this.rollsRemaining > 0)
};

Frame.prototype.registerRoll = function(numberOfPins) {
  if (numberOfPins === 10) {
    this.rollsRemaining -= 2;
  };
  this.score += numberOfPins;
  this.rollsRemaining--;
};

Frame.prototype.totalScore = function () {
  return this.score;
};