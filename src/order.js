function takeOrder (orderNumber, deliveryOrders) {
  if (deliveryOrders.length <3) {
    return deliveryOrders.push(orderNumber) 
}
}

function refundOrder(orderNumber, deliveryOrders) {
  for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
  return deliveryOrders.splice([i],1);
    }
  }
}


//splice method is returing one removed element or replaced element in array
//should return array with removed items thus removing whatever order number
//needs to be removed or any particular delivery order 

function listItems (deliveryOrders) {
  var items = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  } return items.join(", ");
}

//push method keeps value of items the same it is accessing the items through
//the delivery orders length 
//join is accessing each item in the list thus listing all the items 


function searchOrder(deliveryOrders,itemName) {
  for(var i = 0; i < deliveryOrders.length; i++) 
    if(deliveryOrders[i].item === itemName){
      return true
    }
  
  return false
}

//accessing a certain index of the array in different lists 

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}