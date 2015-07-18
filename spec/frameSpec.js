describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('knows when the frame is in progress', function() {
    it('is in progress a new frame', function() {
      expect(frame.isInProgress()).toEqual(true);
    });

    it('is in progress with 1 roll', function() {
      frame.registerRoll(1);

      expect(frame.isInProgress()).toEqual(true);
    });
  });

  describe('knows when the frame is over', function () {
    it('after two rolls', function() {
      frame.registerRoll();
      frame.registerRoll();

      expect(frame.isInProgress()).toBe(false);
    });

    it('after a strike', function() {
      frame.registerRoll(10);

      expect(frame.isInProgress()).toBe(false);
    });

    it('after a spare', function() {
      frame.registerRoll(4);
      frame.registerRoll(6);

      expect(frame.isInProgress()).toBe(false)
    });
  });

  describe('knows its total score', function() {

    it('after 2 rolls', function() {
      frame.registerRoll(4);
      frame.registerRoll(2);

      expect(frame.totalScore()).toEqual(6);
    });

    it('after a strike', function() {
      frame.registerRoll(10);

      expect(frame.totalScore()).toEqual(10);
    });
  });

  describe('knows when it is a strike', function() {

    it('after a single roll', function() {
      frame.registerRoll(10);

      expect(frame.isStrike()).toBe(true);
    });

    it('after rolling 10 on the second go', function() {
      frame.registerRoll(0);
      frame.registerRoll(10);

      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('knows when it is a spare', function () {

    it('rolling 10 on the second go', function() {
      frame.registerRoll(0);
      frame.registerRoll(10);

      expect(frame.isSpare()).toBe(true);
    });
  });




});






