"use strict";


// 1. printIndices
function printIndices(items) {
  for (const idx in items) {
    console.log(items[idx], idx)
  }
}
printIndices(['apple','berry','cherry'])

// 2. everyOtherItem

function everyOtherItem(items) {
  
    let isPrint = true;

    for (const item of items) {
        if (isPrint) {
            console.log(item);
            isPrint = false;
        } else {
            isPrint = true;
        }
    }
}
everyOtherItem(['apple','berry','cherry'])

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b).slice(0, n);
  sortedItems.reverse();

  console.log(sortedItems)


}
console.log(smallestNItems(['kelli','chan', 'britt'], 2))
