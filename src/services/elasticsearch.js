import * as ElasticSearch from 'elasticsearch';
import shortid from 'shortid';

// TODO: move connection string to config or environment variable
const ElasticSearchClient = new ElasticSearch.Client({
  host: 'localhost:9200',
});

class ElasticSearchService {
  /**
   *
   * @param term
   * @returns {Promise<Array>}
   */
  static async searchQuoteText(term) {
    // Perform the search
    const results = await ElasticSearchClient.search(
      {
        body: {
          query: {
            match: {
              text_entry: term,
            },
          },
        },
      },
    );

    // Make sure we have a valid response
    if (results && results.hits && results.hits.hits) {
      return results.hits.hits;
    }
    return [];
  }

  static async addQuote({ playName, lineNumber, speaker, quoteText }) {
    // Construct the elastic search specific data model
    const q = {
      index: 'quotes',
      type: 'line',
      id: shortid.generate(),
      body: {
        play_name: playName,
        line_number: lineNumber,
        speaker,
        text_entry: quoteText,
      },
    };

    // Create the new quote in our elastic search instance
    const results = await ElasticSearchClient.create(q);

    // Return the results if we have them, else an empty array
    return results || [];
  }
}

export default ElasticSearchService;
