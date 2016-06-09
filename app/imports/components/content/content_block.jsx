import React from 'react'
import ReactMarkdown from 'react-markdown'

export const ContentBlock = (props) => {

	const displayContent = (contentValue) => {
		return contentValue === ""?
		  props.emptyMsg
		 :
		 contentValue
	}

  return props.useMarkdown?
    <div><ReactMarkdown source={displayContent(props.contentValue)} /></div>
   :
    <div>{displayContent(props.contentValue)}</div>   
}

ContentBlock.propTypes = { 
  contentValue: React.PropTypes.string.isRequired,
  useMarkdown: React.PropTypes.bool,
  emptyMsg: React.PropTypes.string
}

ContentBlock.defaultProps = {
	useMarkdown: false,
  emptyMsg: "Empty item."
}

