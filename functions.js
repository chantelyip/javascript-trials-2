"use strict";


// 1. isHometown
    function isHometown(town) {
        return town === 'San Francisco';
    }

console.log(isHometown('San Francisco'))

// 2. getFullName

//     function getFullName(firstName, lastName) {
//         return `${firstName} ${lastName}`;
//     }
// console.log(getFullName('Chantel', 'Yip'))

// alternative way with arrow

    const getFullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName2('Chantel', 'Yip'))

// 3. calculateTotal

    function calculateTotal(basePrice, state, tax=0.05) {

        let fee = 0;
        const subtotal = basePrice + (1 + tax);

        if  (state === 'CA') {
            fee = .03 * subtotal;
        }   else if (state === 'PA') {
            fee = 2;
        }   else if  (state === 'MA') {
            if (basePrice <= 100)   {
                fee = 1;
            } else {
            fee = 3;
            } 
        }
    return subtotal + fee 
}
console.log(calculateTotal(200, 'MA'))  

