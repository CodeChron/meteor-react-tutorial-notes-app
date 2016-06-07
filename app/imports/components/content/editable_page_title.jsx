import React from 'react'
import { PageTitle } from './page_title'

export const EditablePageTitle = (props) => <span className="clickable" onClick={props.toggleEditMode}>
    <PageTitle title={props.contentValue} />
  </span> 
// :
//   <AutoSaveInput contentValue={props.editableContent} {...props} />


// export const EditablePageTitle = (props) => props.editMode?
//   <span className="clickable" onClick={props.toggleEditMode}>
//     <PageTitle title={props.editableContent} />
//   </span> 
// :
//   <AutoSaveInput contentValue={props.editableContent} {...props} />