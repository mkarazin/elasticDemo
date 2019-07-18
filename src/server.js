import express from 'express';
import bodyParser from 'body-parser';

import { log } from './utils/logger';

const app = express();

// Connect basic middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Hook up our routes
app.use('/', require('./routes'));

// Start the server listening
const server = app.listen(3000, () => {
  log.info('Demonstration Express API Running');
});

// Handle Errors
app.use((err, req, res, next) => {  
  // Log the request with error noted
  log.error('ERROR - %s, %s', req.method, req.url);

  // Log the Error
  log.error(err.stack);

  // Return 500 error code
  res.status(500).send({ message: 'Error' });
});

// Handle 404s
app.use((req, res, next) => {
  res.status(404).send({
    message: '404: Page could not be found',
    urlRequested: `${req.method} ${req.url}`,
  });
});
