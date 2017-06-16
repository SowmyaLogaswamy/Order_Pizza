//Business Logic
function PizzaDelivery(name,size,topping,quantity) {
  this.pizzaName = name;
  this.pizzaTopping = topping;
  this.pizzaSize = size;
  this.orderquantity = quantity;
  this.pizzaCost = 0;
}

PizzaDelivery.prototype.EnumeratePizzaCost = function() {
  if(this.pizzaSize === 'small')
  {
    this.pizzaCost += 4
  }
  else if(this.pizzaSize === 'medium')
  {
    this.pizzaCost += 5
  }
  else if(this.pizzaSize === 'large')
  {
    this.pizzaCost += 6
  }
  if(this.pizzaName === '1')
  {
    this.pizzaCost += 1
  }
  else if(this.pizzaName === '2')
  {
    this.pizzaCost += 2
  }
  else if(this.pizzaName === '3')
  {
    this.pizzaCost += 3
  }
  else if(this.pizzaName === "4")
  {
    this.pizzaCost += 2
  }
  else if(this.pizzaName === "5")
  {
    this.pizzaCost += 1
  }
  for(var i=0;i<this.pizzaTopping.length;i++)
  {
    if(this.pizzaTopping[i] === "1")
    {
      this.pizzaCost += 2.5
    }
    else if(this.pizzaTopping[i] === "2")
    {
      this.pizzaCost += 2
    }
    else if(this.pizzaTopping[i] === "3")
    {
      this.pizzaCost += 1
    }
    else if(this.pizzaTopping[i] === "4")
    {
      this.pizzaCost += 2.5
    }
    else if(this.pizzaTopping[i] === "5")
    {
      this.pizzaCost += 1.1
    }
    else if(this.pizzaTopping[i] === "6")
    {
      this.pizzaCost += 2.2
    }
    else if(this.pizzaTopping[i] === "7")
    {
      this.pizzaCost += 2.3
    }
    else if(this.pizzaTopping[i] === "8")
    {
      this.pizzaCost += 3
    }
    else if(this.pizzaTopping[i] === "9")
    {
      this.pizzaCost += 1
    }
    else if(this.pizzaTopping[i] === "10")
    {
      this.pizzaCost += 2
    }
  }
  return this.pizzaCost.toFixed(2);
}

//User Interface Logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
  var pizzaToppingArray=[];
  var pizzaGetName = $("input:radio[name=flavor]:checked").val();
  $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppingArray.push($(this).val());
  });
  var getPizzaSize = $("input:radio[name=size]:checked").val();
  var quantity = parseInt($("input#new-pizza-quantity").val());

 var newPizzaOrder = new PizzaDelivery(pizzaGetName,getPizzaSize,pizzaToppingArray,quantity);
 var pizzaCost = newPizzaOrder.EnumeratePizzaCost();

 //$(".total-cost").text(pizzaCost);
 $(".total-cost").append("Total Cost: " + "$" + ticketTotal +"<br>");


// if((name === "1")  && (this.pizzaSize === "small")) {
//       pizzacost =5;
//     }
//     else if(name === "2" && size === "medium") {
//       pizzacost = 7;
//     }
//     else if(name === "3" && size === "large") {
//       pizzacost = 10;
//     }
//     var totalCost = quantity * pizzacost;
// // var newPizzaOrder = new Pizza(pizzaName,pizzaSize,pizzaToppingsArray,pizzaQuantity);
// //     var pizzaCost = newPizzaOrder.pizzaRate();
//         $("#results").append("Pizza Name: " + pizzaName +"<br>");
//         $("#results").append("Total Cost: " + "$" + totalCost +"<br>");

});
});
