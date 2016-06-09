import React from 'react'
import { AutoSaveInput } from './auto_save_input'

export class ClickToEdit extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      editMode: this.props.editMode
    }
  }

  toggleEditMode(){
    this.setState({ editMode: !this.state.editMode })
  }

  render() {

    return this.state.editMode?
      <AutoSaveInput doneEditing={this.toggleEditMode.bind(this)} {...this.props} />
      :
      <span className="helper-clickable" onClick={this.toggleEditMode.bind(this)}>{this.props.clickableComponent}</span> 
  }
}

ClickToEdit.propTypes = { 
  clickableComponent:  React.PropTypes.object.isRequired,
  editMode:            React.PropTypes.bool
}

ClickToEdit.defaultProps = {
  editMode: false
}
