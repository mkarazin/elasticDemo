import * as ElasticSearch from 'elasticsearch';

// TODO: move connection string to config or environment variable
const ElasticSearchClient = new ElasticSearch.Client({
  host: 'localhost:9200',
});

export {
  ElasticSearchClient,
};
