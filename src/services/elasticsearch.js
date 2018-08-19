import * as ElasticSearch from 'elasticsearch';

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
}

export default ElasticSearchService;
