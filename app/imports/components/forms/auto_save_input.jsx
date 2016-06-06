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
    this.props.doneEditing()
  }

  render() {
    return  <form>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder={this.props.placeholder}
                  value={this.state.contentValue}
                  onChange={this.handleOnChange.bind(this)}
                  autoFocus={"true"}
                  onBlur={this.handleOnBlur.bind(this)}
                />
              </div>
              <button className="btn btn-default">Done</button>
            </form>
  }
}

AutoSaveInput.propTypes = {
  handleUpdates: React.PropTypes.func.isRequired,
  field: React.PropTypes.string.isRequired,
  contentValue: React.PropTypes.string,
  placeholder: React.PropTypes.string
}

AutoSaveInput.defaultProps = {
  contentValue:  ""  ,
  placeholder: "Write something..."
}