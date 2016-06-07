import React from 'react'
import { AutoSaveInput } from './auto_save_input'

export class ClickToEditContainer extends React.Component {

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
      <span className="clickable" onClick={this.toggleEditMode.bind(this)}>{this.props.clickableComponent}</span> 
  }
}

ClickToEditContainer.propTypes = { 
  clickableComponent: React.PropTypes.object.isRequired,
  editMode: React.PropTypes.bool
}

ClickToEditContainer.defaultProps = {
  editMode: false
}
