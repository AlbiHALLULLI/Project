import React from 'react'
import './css/style.css'

const CSSReact = () => {
    let styleText = {
fontstyle: "italic",
color: "green",

    }
  return (
    <div>
<h1 style={{color:"red", fontSize: "50px"}}>CSS inline</h1>
<h2 style={styleText}>CSS internal</h2>
<h3 className="Albi">CSS external</h3>


    </div>
  )
}

export default CSSReact