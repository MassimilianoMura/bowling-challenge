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
  });



});