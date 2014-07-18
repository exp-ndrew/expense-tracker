 var NewCategory = {
  items: [],
  // totalCost: function(price){
  //   var grandTotal = 0;
  //   for (var i=0; i<price.length; i++) {
  //     this.total = this[[items[i]].price] + price[i];
  //   }
  // }
};

var Purchase = {
  description: "",
  price: 0,
  quantity: 0,
  total: function(){
    return this.price * this.quantity;
  }
};

$(document).ready(function() {

  var currentList;

//CLICK THE CATEGORY ADD BUTTON
  $("#category-add").click(function(event) {

    event.preventDefault();
    var catName = $("input#new-category").val();

    //appending to the lists list
    $("#category-list").append("<li class='category-list-item'>" + catName + "</li>");
    $(".selected-category").text(catName);

    //set the current list to this input
    currentList = catName;

    //build the category object
    category = Object.create(NewCategory); // creates the object
    category.name = catName;

    $("input#new-category").val("");



//CLICK A LIST ITEM
    $(".category-list-item").last().click(function(event) {
      currentList = catName;
      $(".selected-category").text(catName);
      $("#purchase-table").empty();
      currentList.items.forEach(function(item) {
        $("#purchase-table").append("<tr><td>" + currentList[items].description + "</td>" + "<td>$" + currentList[items].price + "</td></tr>");
      });
      //populate the right side with the items in the object/array/whatever
    });
  });




//CLICK THE PURCHASE ADD BUTTON
  $("#purchase-add").click(function(event){
    var newDescription = $("#new-description").val();
    var newPrice = $("#new-price").val();
    var newQuantity = $("#new-quantity").val();

    //build the purchase object
    var purchase = Object.create(NewPurchase);
    purchase.description = $("#new-description").val();
    purchase.price = parseFloat($("#new-price").val());
    purchase.quantity = $("#new-quantity").val();
    category.items.push(purchase);

    console.log(purchase.total());

    //append to the purchases list
    $("#purchase-table").append("<tr><td>" + purchase.description + "</td><td>$" + purchase.price + "</td><td>" + purchase.quantity + "</td><td>$" + purchase.total() + "</td></tr>");

    //fill in the grand total box
    $("#purchase-total").text("<td>Your total is $" + category.total() + ". </td>")

    // console.log(category)

    //clear the form
    $("input#new-description").val("");
    $("input#new-price").val("");
    $("#new-quantity").val("");
  })

});
