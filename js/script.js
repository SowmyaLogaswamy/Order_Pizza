//Business Logic
function PizzaDelivery(name,size,topping,quantity) {
  this.pizzaName = name;
  this.pizzaTopping = topping;
  this.pizzaSize = size;
  this.orderquantity = quantity;
  this.pizzaCost = 0;
}

PizzaDelivery.prototype.EnumeratePizzaCost = function() {
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
  for(var i=0;i<this.pizzaTopping.length;i++)
  {
    if(this.pizzaTopping[i] === "s1")
    {
      this.pizzaCost += 2.5
    }
    else if(this.pizzaTopping[i] === "s2")
    {
      this.pizzaCost += 2
    }
    else if(this.pizzaTopping[i] === "s3")
    {
      this.pizzaCost += 1
    }
    else if(this.pizzaTopping[i] === "m1")
    {
      this.pizzaCost += 2.5
    }
    else if(this.pizzaTopping[i] === "m2")
    {
      this.pizzaCost += 1.1
    }
    else if(this.pizzaTopping[i] === "v1")
    {
      this.pizzaCost += 2.2
    }
    else if(this.pizzaTopping[i] === "v2")
    {
      this.pizzaCost += 2.3
    }
    else if(this.pizzaTopping[i] === "me1")
    {
      this.pizzaCost += 3
    }
    else if(this.pizzaTopping[i] === "me2")
    {
      this.pizzaCost += 1
    }
    else if(this.pizzaTopping[i] === "h1")
    {
      this.pizzaCost += 2
    }
  }
  return this.pizzaCost.toFixed(2);
}

//User Interface Logic
$(document).ready(function() {
  $(".bxslider").bxSlider({
    auto: true,
    autoControls: true
  });
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
    $(".total-cost").append("Total Cost: " + "$" + pizzaCost +"<br>");
  });
  prevent.eventDefault();
});
