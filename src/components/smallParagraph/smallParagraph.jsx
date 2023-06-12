import React from 'react'
import './smallParagraph.css';

function SmallParagraph(props) {
  return (
    <p className='small_p'>{props.children}</p>
  )
}

export default SmallParagraph