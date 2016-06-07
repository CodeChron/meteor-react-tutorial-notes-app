import React from 'react'
import { AutoSaveInput } from '../forms/auto_save_input'

export class EditableContent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      editMode: this.props.editMode
    }
  }

  toggleEditMode(){
    this.setState({ editMode: !this.state.editMode })
  }

  displayContent(contentValue, isMultiLine){

    const
      noContentMsg = "Empty note.",
      isEmpty = contentValue === ""

    return isEmpty? noContentMsg : contentValue

  }

  render() {
      return this.state.editMode?
        <AutoSaveInput
          contentValue={this.props.note.content}
          doneEditing={this.toggleEditMode.bind(this)}
          {...this.props}
        />
      :
        <span className="clickable" onClick={this.toggleEditMode.bind(this)}>{this.displayContent(this.props.contentValue, this.props.multiLine)}</span> 
  }
}

EditableContent.propTypes = { 
  contentValue: React.PropTypes.string.isRequired,
  editMode: React.PropTypes.bool,
  multiLine: React.PropTypes.bool
}

EditableContent.defaultProps = {
  multiLine: false,
  editMode: false
}