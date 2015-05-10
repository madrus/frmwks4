#My notes for ReactJS
##A. http-server
###1. Install
>npm install -g http-server

###2. Go to the root directory of your website
>cd path/to/the/root

###3. Run
>http-server

###4. Browse to localhost:8080
The webserver will be serving the files in the root directory

##B. JSXTransformer
Put this hint into every JSX file as the first line. It is necessary for the JSXTransformer to know that it needs to transform this file to JS.

```/** @jsx React.DOM */```

##C. State and props
The state in ReactJS belongs to a component. It cannot be modified by a parent or a child.
The parent can pass data to a child via props. Props are read-only to a child, which cannot modify their data.
If we want to modify some data, we must do it at the level where that data gets its state.
