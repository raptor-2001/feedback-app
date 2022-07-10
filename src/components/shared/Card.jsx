import React from 'react'
import PropTypes from 'prop-types'

function Card({children,reverse}) {
  return (

    // setting dark using adding class
    <div className ={`card ${reverse && 'reverse'}`}>{children}</div>

    // setting dark using style tag
    // <div className="card" style={{
    //   backgroundColor: reverse ? 'rgba(0,0,0,0.4)':'#ffff',
    //   color: reverse ? 'white':'black',
    // }}>{children}</div>

  )
}


Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  reverse: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Card
