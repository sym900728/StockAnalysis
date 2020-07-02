'use strict'

let roe = [
    1.0942, // 2000
    1.1132,
    1.084,
    1.0479,
    1.0530,
    1.1135,
    1.1780,
    1.3394,
    1.2531,
    1.4020,
    1.2812,
    1.2849,
    1.2664,
    1.2515,
    1.3034,
    1.4298,
    1.2219,
    1.2302,
    1.2487,
    1.2529
]

const compositeRoe = () => {
    roe.map((v, i) => {
        let temp = []
        for (let m = 0; m < i+1; m++) {
            temp.push(roe[m])
        }
        let data = temp.reduce(function (pre, current) {
            return pre * current
        })
        console.log(data)
    })
}

compositeRoe()
