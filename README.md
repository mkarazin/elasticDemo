# elasticSearchDemo

Elasticsearch demonstration project - For database tech talk at Fullstack Academy

Also used later for The Difference Engine during a pull request and code review workshop.

## To setup elasticSearch on MacOSX with Homebrew

Run the following three commands in terminal

brew update

brew install elasticsearch

elasticsearch

### Load sample dataset
Instructions below taken from https://www.elastic.co/guide/en/kibana/current/tutorial-load-dataset.html.

First download the dataset at https://download.elastic.co/demos/kibana/gettingstarted/shakespeare.json

Then run the following command in terminal:

curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/shakespeare/_bulk?pretty' --data-binary @shakespeare.json
