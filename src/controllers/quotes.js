import { ElasticSearchService } from '../services';
import { Success, InvalidParameters } from '../utils/responseObjects';

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

  /**
   * Adds a new quote to the system
   * @param req Request object
   * @param res Reponse object
   * @param next The next middleware
   * @returns {Promise<>}
   */
  static async add(req, res, next) {
    try {
      // Get the parameters from the body of the HTTP request
      const {
        playName,
        quoteText,
        lineNumber,
        speaker,
      } = req.body;

      // Validate all the parameters
      if (!playName || !quoteText || !lineNumber || !speaker) {
        InvalidParameters(res, 'All properties are required');
      } else if (playName.length < 1 || playName.length > 40) {
        InvalidParameters(res, 'Parameter playName must be between 1 and 40 characters in length');
      } else if (quoteText.length < 1 || quoteText.length > 4000) {
        InvalidParameters(res, 'Parameter quoteText must be between 1 and 4000 characters in length');
      } else if (lineNumber.length < 1 || lineNumber.length > 40) {
        InvalidParameters(res, 'Parameter lineNumber must be between 1 and 40 characters in length');
      } else if (speaker.length < 1 || speaker.length > 40) {
        InvalidParameters(res, 'Parameter speaker must be between 1 and 40 characters in length');
      } else {
        // Add the quote into ElasticSearch
        const results = await ElasticSearchService
          .addQuote({ playName, lineNumber, speaker, quoteText });

        Success(res, results);
      }
    } catch (e) {
      // Pass to a higher level error handler
      next(e);
    }
  }
}

export default QuotesController;
