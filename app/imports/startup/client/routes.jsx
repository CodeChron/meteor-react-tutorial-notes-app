import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
import { App } from '/imports/components/app'
import { Homepage } from '/imports/components/pages/homepage'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(App, {
      page: (props) => <Homepage {...props} />
    })
  }
})