import { Router } from 'express';
import * as ResponseObjects from '../utils/responseObjects';
import { ElasticSearchClient } from '../services/elasticsearch';

const router = new Router();

// Searches for quotes
router.get(
  '/quotes',
  async (req, res) => {
    // Get the query string fom the search term
    const queryString = req.query.searchTerm;

    // Perform the search
    const results = await ElasticSearchClient.search({
      body: {
        query: {
          match: {
            text_entry: queryString,
          },
        },
      },
    });

    ResponseObjects.Success(res, {
      results: results.hits.hits,
    });
  },
);

/**
 * For Testing / checking if the service is running successfully
 */
router.get(
  '/healthCheck',
  (req, res) => {
    ResponseObjects.Success(res, {
      status: 'up',
    });
  },
);

module.exports = router;
