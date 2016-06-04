import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
import { AppLayout } from '/imports/components/layouts/app_layout'
import { Homepage } from '/imports/components/pages/homepage'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppLayout, {
      content: (props) => <Homepage {...props} />
    })
  }
})