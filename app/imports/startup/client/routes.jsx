import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
import HomepageContainer from '/imports/components/containers/homepage_container'
import NoteDetailsContainer from '/imports/components/containers/note_details_container'
import { Homepage } from '/imports/components/pages/homepage'
import { NoteDetailsPage } from '/imports/components/pages/note_details'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(HomepageContainer, {
      page: (props) => <Homepage {...props} />
    })
  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetails',
  action() {
    mount(NoteDetailsContainer, {
      page: (props) => <NoteDetailsPage {...props} />
    })
  }
})