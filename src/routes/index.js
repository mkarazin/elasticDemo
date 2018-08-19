import { Router } from 'express';
import * as ResponseObjects from '../utils/responseObjects';
import { QuotesController } from '../controllers';

const router = new Router();

// Searches for quotes
router.get('/quotes',
  QuotesController.search);

// For testing & checking if the service is running successfully
router.get('/healthCheck',
  (req, res) => {
    ResponseObjects.Success(res, {
      status: 'up',
    });
  });

module.exports = router;
