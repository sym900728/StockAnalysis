'use strict'
let start = 1.30

let prices = [
    1.69, // 2000
    1.76,
    1.98,
    1.23,
    0.72,
    0.73,
    1.21,
    4.07,
    2.66,
    4.54,
    8.31,
    6.73,
    8.60,
    11.63,
    13.48,
    21.30,
    19.09,
    28.97,
    21.55,
    24.09,
    24.72
]

const compositePrice = () => {
    prices.map(v => {
        console.log((v - start)/start + 1)
    })
}

compositePrice()
