//Business Logic
function Pizza(name, toppings,size,cost) {
  this.pizzaName = name;
  this.toppings = toppings;
  this.pizzaSize = size;
  this.cost = cost;
}
function Order(name, address) {
  this.customerName = name;
  this.address = address;
}

Pizza.prototype.pizzaRate = function (){
  if(name === "1" && size==="small") {
        cost = (name*size);
      }
      else if(name === "2" && size==="medium") {
        chosenPizzaRate*mediumSizeCost;
      }
      else if(name === "3" && size==="large") {
        chosenPizzaRate*largeSizeCost;
      }

}

//User Interface Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
  event.preventDefault();
  var pizzaToppingsArray=[];
  var pizzaName = $("input:radio[name=flavor]:checked").val();
  //var toppings = $("#toppings").val();
  $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppingsArray.push($(this).val());
  });
  var pizzaSize = $("input:radio[name=size]:checked").val();
console.log("test");
var smallsizeCost;
var newPizzaOrder = new Pizza(pizzaSize, pizzaName, pizzaToppingsArray);
    var pizzaCost = newPizzaOrder.pizzaRate();
    console.log("test1");
});
});
