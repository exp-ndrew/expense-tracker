describe('Purchase', function() {
  describe("totalCost", function() {
    it("adds single amount to Purchase.total", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.totalCost([10]);
      testPurchase.total.should.equal(10);
    });
    it("adds multiple amounts together in Purchase.total", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.totalCost([10, 12, 13.50]);
      testPurchase.total.should.equal(35.50);
    });
  });
});
