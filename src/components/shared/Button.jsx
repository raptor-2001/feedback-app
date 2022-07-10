import React from 'react'
import PropTypes from 'prop-types'


function Button({children,version,isDisabled,type}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled = {isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps ={
  version: 'primary',
  type: 'button',
  isDisabled: false
}

Button.propTypes ={
  children : PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  version: PropTypes.string
}

export default Button
