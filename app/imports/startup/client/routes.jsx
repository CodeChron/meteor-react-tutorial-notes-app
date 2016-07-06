import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
import { AppContainer } from '/imports/containers/app_container'
import { Homepage } from '/imports/components/pages/homepage'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      page: props => <Homepage {...props} />
    })
  }
})
