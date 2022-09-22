# Web coding basics tutorial using HTML and CSS
Step-by-step I share my learnings as I am creating my personal landing page.


# Running the examples
Make sure npm and node is installed to run the examples. Versions that's been used during development are the following:
node -v => v18.9.0
npm -v => 8.19.2

[Express](https://expressjs.com/) is used to spin up a webserver at port `3000`. It It's only used to serve static HTML files located in the public folder.

Setting up the server
```JavaScript
const express = require('express')
const path = require('path')
const app = express()
const options = {index:false,extensions:['html']}
app.use('/', express.static(path.join(__dirname, '../public'), options))
app.listen(3000)
```

Using nodemon to run the server, allows you to change the files and immediately see the affected changes.

The different steps can now be accessed via localhost:3000. For example for the file located in the folder "public/step1.html", the url `localhost:3000/step1`can be used. This will show you how the browser renders the HTML

css and images are also served using express e.g.
localhost:3000/images/article1.webp
localhost:3000/css/step3.css



