//This is what one can think of as an 'import manifest file'.  It lists all the files we will want to import on startup to the client side. (Then, we import the files by importing *this* file - see /client/main.js) The order of the imports matters. Here,for example, we are first loading our stylesheets.  Those stylesheets, in turn, will be available to the routes (or pages) that we load next. In both the imports below, we are pointing to files and loading the entire file.  It is not necessary to include the file name extension (ie. these files are actually named main.scss and routes.jsx), unless there are multiple files of the same name in the same directory.

import '/imports/stylesheets/main'
import './routes'

//NEXT: Continue to /imports/stylesheets/main.scss


