import React from 'react'
import debounce from 'lodash.debounce'

export class AutoSaveInput extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      contentValue: this.props.contentValue
    }
  }

  handleUpdates(updatedValue){

    const
      updateInterval = 250,
      options = { 'maxWait': 2000 },
      submitUpdates = (collection, field, value) => {
        this.props.handleUpdates(collection, field, value)
      },
      autoSaveChanges = debounce(submitUpdates, updateInterval, options)
      
    autoSaveChanges(this.props.note, this.props.field, updatedValue)
  }

  handleOnChange(e) {
    const updatedValue = e.target.value

    this.setState({contentValue: updatedValue})
    this.handleUpdates(updatedValue)
  }

  handleOnBlur() {
    this.props.doneEditing? this.props.doneEditing() : null
  }

  displayEditor(multiLineEditor){
    return multiLineEditor?
      <form className="l-flex-main-content l-flex-column l-content-editor">
            <textarea
              placeholder={this.props.placeholder}
              value={this.state.contentValue}
              onChange={this.handleOnChange.bind(this)}
              autoFocus={"true"}
              onBlur={this.handleOnBlur.bind(this)}
              className="l-flex-main-content invisible-textarea"
            />
           <div className="l-flex-row l-flex-centered l-flex-vertical-middle">
             <div className="l-flex-main-content l-centered t-top-divider l-top-padding">
               <button className="text-btn btn-main">Done</button>
             </div>
           </div>
        </form>
    :
      <form className="l-single-field-input">
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.contentValue}
          onChange={this.handleOnChange.bind(this)}
          autoFocus={"true"}
          onBlur={this.handleOnBlur.bind(this)}
        />
      </form>
  }

  render() {
    return  this.displayEditor(this.props.multiline)
  }
}

AutoSaveInput.propTypes = {
  handleUpdates: React.PropTypes.func.isRequired,
  field: React.PropTypes.string.isRequired,
  contentValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  multiline: React.PropTypes.bool
}

AutoSaveInput.defaultProps = {
  contentValue:  ""  ,
  placeholder: "Write something...",
  multiline: false
}