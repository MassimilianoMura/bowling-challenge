describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it('knows when the frame is in progress', function() {
    expect(frame.isInProgress()).toEqual(true);
  });



});