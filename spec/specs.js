describe('Places', function () {
  it("creates a new place with given properties", function () {
  var testPlace = new Places ("Hawaii", "summer");
  expect(testPlace.destination).to.equal("Hawaii");
  expect(testPlace.season).to.equal("summer");
  expect(testPlace.landmarks).to.eql([]);
  expect(testPlace.activites).to.eql([]);    
  });
});
