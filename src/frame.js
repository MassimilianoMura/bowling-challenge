function Frame() {
  this.rollsRemaining = 2;
  this.scoreRecord = [];
};


Frame.prototype.isInProgress = function() {
  return (this.rollsRemaining > 0)
};

Frame.prototype.registerRoll = function(numberOfPins) {
  if (numberOfPins === 10) {
    this.rollsRemaining -= 2;
  };
  this.scoreRecord.push(numberOfPins);
  this.rollsRemaining --;
};

Frame.prototype.totalScore = function() {
  var scoreCount = 0;
  for (var i = 0; i < this.scoreRecord.length; i++) {
    scoreCount += this.scoreRecord[i];
  }
  return scoreCount;
};

Frame.prototype.isStrike = function() {
  return (this.totalScore() === 10 && this.scoreRecord.length < 2);
}

Frame.prototype.isSpare = function() {
  return (this.totalScore() === 10 && this.scoreRecord.length === 2);
};