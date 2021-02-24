const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use('/api/fecTest', express.static('public'));

app.get('/api/fecTest', (req, res) => {
  res.status(200).send('SUCCESS');
})

app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`);
});



/* Serving Static Files:

  Syntax: express.static(root, [options])

  -- The root argument specifies the root directory from which to serve static assets.
  -- The path that you provide to the express.static function is relative to the directory from where you launch your node process

    Basic App.: app.use(express.static('public'))
      - serves static files from public dir

    Int. App.: app.use('/static', express.static('public'))
      - '/static' is your virtual file path, set to whatever you want

    Adv. App: app.use('/static', express.static(path.join(__dirname, 'public')))
      - __dirname allows files to be served from absolute dir
      - mostly applicable if running express app from another dir

  INT: only running express from here for now.
  app.use('/api/fecTest', express.static('public'));

*/