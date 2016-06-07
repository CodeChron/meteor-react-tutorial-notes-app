import React from 'react'

export const ContentBlock = (props) =>
  <div>{props.contentValue}</div>

ContentBlock.propTypes = { 
  contentValue: React.PropTypes.string.isRequired
}