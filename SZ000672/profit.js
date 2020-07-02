'use strict'
let start = 1.06

let prices = [
    1.06,
    2.61,
    3.71,
    0.77,
    1.45,
    7.92,
    14.72,
    23.31
]

const compositePrice = () => {
    prices.map(v => {
        console.log(((v - start)/start + 1) * 1.8)
    })
}

compositePrice()
