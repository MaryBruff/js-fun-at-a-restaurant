function nameMenuItem(name) {
return `Delicious ${name}`
}
//string interpolation

//putting into object
function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  
  }
}


function addIngredients (newIngredients, ingredients) {
  if (ingredients.includes(newIngredients)) {
    return ingredients 
  } else { 
    return ingredients.push(newIngredients);
  }  
}

function formatPrice (initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice (price) {

var percentDecrease = (price * 10) / 100 

return price - percentDecrease

}

// the problem I want to solve is decreasing the price by 10%
// I want to access the menu item and the price I need to decrease which is 6.00
// I am going to get 10 percent of 6.00
// what is 10 percent of 6 and then calculate that by subtracting 100
// I want to return decreased price

/////////////////////////////////////////////////////////  
 
function createRecipe(title, ingredients , type ) {
  return {
    title: title,
    ingredients: ingredients,
    type: type,
  } 
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

//names of functions under module.exports//
