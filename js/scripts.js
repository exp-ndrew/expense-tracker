 var NewCategory = {
  theme: "",
  items: [],
  totalCost: function(price){
    for (var i=0; i<price.length; i++) {
      this.total = this.total + price[i];
    }
  }
};

 var Purchase = {
  description: "",
  price: 0,
};

$(document).ready(function() {

  var currentList = "";

  $("#category-add").click(function(event) {

    event.preventDefault();
    var catName = $("input#new-category").val();
    $("#category-list").append("<li class="category-list-item">" + catName + "</li>");
    $(".selected-category").text(catName);
    currentList = catName;
    console.log(currentList)
    newCategory = Object.create(NewCategory); // creates the object
    console.log(newCategory);
    $("input#new-category").val("");
  });

  $(".category-list-item").last().click(function(event) {
    currentList = $(".category-list-item").val();

    console.log(currentList);


  })


  // $("form#new-description".submit(function(event) {
  //   var inputtedDescription = $("input#description").val();
  //   var inputtedAmount = $("input#amount")
  // }


});
