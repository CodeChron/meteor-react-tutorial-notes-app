//This is what one can think of as an 'import manifest file'  
//This lists all the files we will want to import on startup to the client side. (Then, we import the files by importing *this* file - see /client/main.js)
//The order of the imports matters when you are importing files.
// Here,for example, we are first loading our stylesheets.  Those stylesheets, in turn, will be available to the routes (or pages) that we loade next.
//In both these cases, we are pointing to files and loading those files.  It is not necessary to include the file name extension (ie. these files are actually name main.scss and routes.jsx), unless there are multiple files of the same name in the same directory.

import '/imports/stylesheets/main'
import './routes'

//Next, continue to /imports/stylesheets/main.scss


