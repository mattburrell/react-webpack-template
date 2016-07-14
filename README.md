# react-and-webpack-starter
Simple template to get started with React.js and Webpack using ES6. This will get you up and running so you can start building an application in React.js using ES6. Once you've got this code running, I highly recommend reading Pete Hunt's [guide](https://github.com/petehunt/react-howto) to the React ecosystem.

*Credit: This repository was forked from Pete Hunt's [React Webpack Template](https://github.com/petehunt/react-webpack-template).*


1. **Install** [Node](https://nodejs.org) if you haven't already.
2. **Clone** this repository `https://github.com/mattburrell/react-and-webpack-starter.git`.
3. Navigate to the directory you just created. `cd react-and-webpack-starter`
4. **Install the node packages.** `npm install`
5. **Run** `open index.html` - note that the webpage will display `Loading...`. This is because the `browser-bundle.js` hasn't been created yet.
6. **Build** `app.js` by running `npm run build`. This will tell webpack to use [Babel](https://babeljs.io/) to transpile the `.js` files into ES5 and bundle them into `browser-bundle.js`. This is referenced in `index.html`. **Note** that webpack will now be running in `watch` mode so will automatically transpile and bundle any changes you make to the `.js` files.
7. Refresh your browser window and you will see that the `Loading...` message has been replaced with **Get up and running with React.js and Webpack using ES6**.

You can now start using React ES6 components to build your application.

Enjoy!
