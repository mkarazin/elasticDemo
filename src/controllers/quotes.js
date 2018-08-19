import { ElasticSearchClient } from '../services/elasticsearch';
import { Success } from '../utils/responseObjects';

class QuotesController {
  /**
   * Searches for a given quote
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  static async search(req, res, next) {
    try {
      // Get the query string fom the search term
      const queryString = req.query.searchTerm;

      // Perform the search
      const results = await ElasticSearchClient.search(
        {
          body: {
            query: {
              match: {
                text_entry: queryString,
              },
            },
          },
        },
      );

      Success(res, results.hits.hits);
    } catch (e) {
      // Pass to a higher level error handler
      next(e);
    }
  }
}

export default QuotesController;
