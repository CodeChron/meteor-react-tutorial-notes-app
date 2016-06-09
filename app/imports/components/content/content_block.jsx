import React from 'react'
import ReactMarkdown from 'react-markdown'

export const ContentBlock = props => {

	const handleEmptyContent = (contentValue, emptyMsg) => {
		return contentValue === ""?
		  emptyMsg
		 :
		 contentValue
	},
  displayContent = handleEmptyContent(props.contentValue, props.emptyMsg)

  return props.useMarkdown?
    <div><ReactMarkdown source={displayContent} /></div>
   :
    <div>{displayContent}</div>   
}

ContentBlock.propTypes = { 
  contentValue:   React.PropTypes.string.isRequired,
  useMarkdown:    React.PropTypes.bool,
  emptyMsg:       React.PropTypes.string
}

ContentBlock.defaultProps = {
	useMarkdown:    false,
  emptyMsg:       "Empty item."
}

