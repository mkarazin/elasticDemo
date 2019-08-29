import { ElasticSearchService } from "../services";
import { Success } from "../utils/responseObjects";

class QuotesController {
  /**
   * Searches for a given quote
   * @param req
   * @param res
   * @param next
   * @returns {Promise<void>}
   */
  static async search(req, res, next) {
    try {
      // Get the query string fom the search term
      const queryString = req.query.searchTerm;

      // Perform the search
      const results = await ElasticSearchService.searchQuoteText(queryString);

      Success(res, results);
    } catch (e) {
      // Pass to a higher level error handler
      next(e);
    }
  }
}

export default QuotesController;
