'use strict'

let roe = [
    1.0442, // 2000
    1.0096,
    1.0162,
    0.7303,
    1.0209,
    0.8096,
    1.0175,
    1.0198,
    1.0554,
    1.1833,
    1.1806,
    1.1899,
    1.3847,
    1.2650,
    1.2355,
    1.2390,
    1.1562,
    1.1599,
    1.2085,
    1.2854
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
