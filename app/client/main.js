// By default, Meteor loads files 'eagerly', meaning that all files inside your app directory will be loaded and accessible when the app starts up.  One disadvantage of this is, if you have a large app with lots of files, you are likely loading much more than you actually need on startup, which in turn can lead to a bad user experience (what's worse than a slow loading app?) With Meteor 1.3, we can address this with 'lazy' loading, in which files are not loaded by default.  To take advantage of this, we need to place files in a special directory named "imports" and then import the files we need.  The example below uses ES6 module syntax to import files on startup.
//Here, we are pointing to a directory in the imports directory. For this to work, we need an index.js file in that directory.
//NEXT: continue to /imports/startup/client/index.js

import '/imports/startup/client'


