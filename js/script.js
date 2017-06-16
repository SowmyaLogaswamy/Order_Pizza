//Business Logic
function Pizza(name, toppings, pizzaSize,cost) {
  this.pizzaName = name;
  this.toppings = toppings;
  this.pizzaSize = size;
  this.cost = cost;
}
function Order(name, address) {
  this.customerName = name;
  this.address = address;
}
var pizzaToppingsArray=[];
//User Interface Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
  event.preventDefault();
  var pizzaName = $("input:radio[name=flavor]:checked").val();
  var toppings = $("#toppings").val();
  $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppingsArray.push($(this).val());
  });
console.log("test");

});
});
