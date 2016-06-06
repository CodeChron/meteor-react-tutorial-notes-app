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

  displayContent(contentValue){
    const
      noContentMsg = "Empty note.",
      isEmpty = contentValue === "",
      displayedContent = isEmpty? noContentMsg : contentValue

    return <span className="clickable" onClick={this.toggleEditMode.bind(this)}>{displayedContent}</span>
  }

  render() {
      return this.state.editMode?
        <AutoSaveInput
          contentValue={this.props.note.content}
          doneEditing={this.toggleEditMode.bind(this)}
          {...this.props}
        />
      :
        this.displayContent(this.props.contentValue)   
  }
}

EditableContent.propTypes = { 
  contentValue: React.PropTypes.string.isRequired,
  editMode: React.PropTypes.bool
}

EditableContent.defaultProps = {
  editMode: false
}