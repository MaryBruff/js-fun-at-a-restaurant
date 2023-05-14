function createRestaurant (name) {
  var pizzaRestaurant = {
    name : name,
    menus: {
      breakfast : [],
      lunch: [],
      dinner: [],

    }
  }
  return pizzaRestaurant
}

function addMenuItem (restaurantName, itemName) {
  restaurantName.menus.lunch.push(itemName)
  return
}


// assert statement comparing-- comparing the expected number and message
// how many arguments-- 
// data type







module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}