import React from 'react'
import ReactMarkdown from 'react-markdown'

export const ContentBlock = props => {

	const
    emptyMsg = <div className="helper-centered gray-pill help-text">{props.emptyMsg}</div>
  ,
    handleMarkDown = (useMarkdown, content) => 
      useMarkdown?
        <div><ReactMarkdown source={content} /></div>
      :
        <div>{content}</div>   
 
  return props.contentValue === ""?
    emptyMsg
  :
    handleMarkDown(props.useMarkdown, props.contentValue)

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

   // }
    // ,
   //  handleEmptyContent = (contentValue, emptyMsg) => {
     //  return contentValue === ""?
   //      <div className="centered gray-pill help-text">{emptyMsg}</div>
     //  :
     //    <div>{() => }</div>
    // },
    
// <div className="centered gray-pill help-text">Empty Note</div>