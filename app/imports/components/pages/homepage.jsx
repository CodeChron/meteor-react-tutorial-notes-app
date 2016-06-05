import React from 'react'
import { ThreeColumnLayout } from '../layouts/three_column_layout'
import { PageTitle } from '../content/page_title'

export const Homepage = (props) => {

	const pageTitle = <PageTitle title={"My Notes App"} />

  return <div id="app-container">
     <ThreeColumnLayout middleCol={pageTitle} />
    <div id="main-content">
      {"Homepage content goes here"}
    </div>
  </div>	
}


