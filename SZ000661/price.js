'use strict'
let start = 3.43

let prices = [
    6.00, // 2000
    4.38,
    2.75,
    1.68,
    1.82,
    1.11,
    2.13,
    6.31,
    3.83,
    11.27,
    25.64,
    14.76,
    25.77,
    45.95,
    36.84,
    51.38,
    55.07,
    90.76,
    87.13,
    222.17,
    419.18
]

const compositePrice = () => {
    prices.map(v => {
        console.log((v - start)/start + 1)
    })
}

compositePrice()
