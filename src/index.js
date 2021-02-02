export function calculateTotal (items, tax) {
  if (-1 < tax > 1) {
    throw error("Tax must be between 0 and 1");
  }
  let holder = 0;
  for (var i = 0; i < items.length; i++) {
    switch(items[i].taxable){
      case false:
        holder = items[i].price + holder;
        break;
      case true:
        holder = ((items[i].price * Math.abs(tax)) + items[i].price) + holder;
        break;
    }
  }
  return holder;
}

// Example items array
const items = [
  {
    price: 100,
    taxable: false
  },
  {
    price: 50,
    taxable: false
  },
  {
    price: 250,
    taxable: true
  }
]

// Example call to calculateTotal
calculateTotal(items, .0975) // 100 + 50 + 250 + (250 * .0975) = 424.375
