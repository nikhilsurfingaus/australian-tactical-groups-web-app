import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Subtitle.module.css'
import ReactTypingEffect from 'react-typing-effect';

const subtitle = (props) => {
  return (
    <h2 className={`animate__animated animate__zoomIn ${classes.Container}`}>
       JOIN - <ReactTypingEffect  className='type' text={["TAG", "CD","TRG", "SOG", "SERT", "SRG", "STRG"]}
      />
    </h2>
  )
}

subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default subtitle
