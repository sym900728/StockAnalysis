'use strict'
// 洋河股份
let start = 23.22

let prices = [
    27.01, // 2009
    53.38,
    61.73,
    54.10,
    24.42,
    49.08,
    60.71,
    64.08,
    106.95,
    89.69,
    107.48,
    143.40
]

const compositePrice = () => {
    prices.map(v => {
        console.log((v - start)/start + 1)
    })
}

compositePrice()
