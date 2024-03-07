import React from 'react'
import img1 from './images/download.png'
import Rule2 from './Rule2'
import Rule1 from './Rule1'

const Rule4 = () => {
    let gjeresi ="50%"
    return (
        <div>

            <img src={img1} alt="..." />
            <p> {1 + 3} </p>
            <p> {10%2 ==0 ? "10 Eshte cift " : "10 eshte tek" } </p>
            {10%2 ==0 ? <Rule2 /> : <Rule1 />}
        </div>
    )
}

export default Rule4