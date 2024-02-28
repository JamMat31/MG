import React from "react"
import background from "./images/michael-fortsch-y5LaV9IEC_g-unsplash.jpg"

const Background = () => {
  return (
  <div style={{backgroundImage: `url(${background})`, backgroundSize: '2000px', minHeight: '1000px', zIndex: '-2'}}>
  </div>
  )
}
export default Background;