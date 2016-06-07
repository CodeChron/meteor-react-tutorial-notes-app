import React from 'react'

export const ContentBlock = (props) => {

	const displayContent = (contentValue) => {
		return contentValue === ""?
		  props.emptyMsg
		 :
		 contentValue
	}

  return <div>{displayContent(props.contentValue)}</div>
}

ContentBlock.propTypes = { 
  contentValue: React.PropTypes.string.isRequired,
  emptyMsg: React.PropTypes.string
}

ContentBlock.defaultProps = {
  emptyMsg: "Empty item."
}

