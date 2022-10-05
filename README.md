# reactrouter

### SPA
Traditionally a website requires a trip to the server to fetch a web page when a user clicks on a link.  
React Single Page Application sends the complete web application to a browser where the individual componenets are rendered into navigable web pages using React Router DOM package.  
When you click on a link, the browser renders the page rather than requesting another page from the server.  

Run `npx create-react-app sitter`  

`public/` : public facing files go here like index.html, css, images etc  

`src/` : here we can create our components  
- App.js will render the default page that react gives us
- index.js : what we use to insert the rendered js into the index.html 

**react-router-dom** : package needed to have navigation occur within our react app

## Serving html via JSX in App.js

- JSX converts HTML into JS code

In `sitter/src/index.js [7]` - We render the element with ID 'root'  
`sitter/src/App.js` contains the JSX that is to be rendered, so this is where we inject the code that was earlier getting rendered via `public/index.html`  
And in `public/index.html` we remove the code within the <body> element and instead assign id='root' to the only <div> attached to the body.  
Hence, in the body of my HTML, I am injecting the JS that is going to be rendered on my page  
  
After this when I run `npm start` I can see the development server starts on port 3000 and I can see my rendered page

## Import React-Router nvigation components
In `App.js` we need to import the React modules to allow for navigation within the SPA.  
When the user clicks on a link, it will take the user to a different part of the app rather than loading a different page from the server.  
In `App.js`, we add the following imports (within curly braces since importing multiple modules from the same react-router-dom package) -
- BrowserRouter
- Switch (to select the React component based on the selected link. Child of BrowserRouter)
- Route (provides a mapping from the link to the React component. Child of Switch tag)
- Link (the React Link component which actually provides the link declaration - a path to the link and a name for the link, like in HTML)

### Creating Components
Create separate components for each of the pages we want to link, i.e. Home, House, Pet, Contact.  
Copy "content" div from App.js (para following <header>) for Home,  
contact.html for Contact,  
stellarpet.html for Pet,  
stellarhouse.html for House.

### Add navigation links to each created React component
- Add the <Router> element (BrowserRouter)
- Modify the HTML links(<a href>) to React navigation links(<Link to>) (`to` has the URL pattern)
- Use the React <Switch> tag to determine which Link was clicked
- Use <Route> to route the link to the appropriate Component (`path` is the detected URL pattern. **Remember to put '/' root path LAST**. If it's put first, all patterns following slash would route to home.)