import React from 'react'
import './bigParagraph.css';

function BigParagraph(props) {
  return (
    <p>{props.children}</p>
  )
}

export default BigParagraph