'use strict'
let start = 2.08

let prices = [
    1.61, // 2002
    2.16,
    2.02,
    2.41,
    7.80,
    18.98,
    5.89,
    11.41,
    8.68,
    8.23,
    9.89,
    8.39,
    13.60,
    15.29,
    15.57,
    26.54,
    23.80,
    36.45,
    37.25
]

const compositePrice = () => {
    prices.map(v => {
        console.log((v - start)/start + 1)
    })
}

compositePrice()
