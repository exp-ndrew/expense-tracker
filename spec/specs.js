describe('Purchase', function() {
  describe("total", function() {
    it("adds single amount to Purchase.total", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.quantity = 2;
      testPurchase.price = 10;
      testPurchase.total().should.equal(20);
    });
    it("adds multiple amounts together in Purchase.total", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.quantity = 1;
      testPurchase.price = 10;
      testPurchase.total().should.equal(10);
    });
  });
});
