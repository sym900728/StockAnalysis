'use strict'

let roe = [
    1.1307, // 2002
    1.1279,
    1.1610,
    1.1751,
    1.1849,
    1.2476,
    1.2741,
    1.2118,
    1.2175,
    1.2417,
    1.2478,
    1.2312,
    1.1928,
    1.1709,
    1.1627,
    1.1654,
    1.1657,
    1.1684
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
