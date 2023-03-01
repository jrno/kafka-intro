# simple-messaging

Example illustrating basic producer/consumer setup with [KafkaJS](https://www.npmjs.com/package/kafkajs) and TS

## Environment variables

- `CLIENT_ID` (default: simple-messaging-client-id)
- `KAFKA_EXAMPLE_BROKER_HOST` (default: localhost)
- `KAFKA_EXAMPLE_BROKER_PORT` (default: 9092)
- `KAFKA_EXAMPLE_TOPIC` (default: simple-messaging-demo)

## Running

- `kafka-topics.sh --bootstrap-server localhost:9092 --create --topic simple-messaging-demo`
- Run `yarn start:producer` to start producer prompt
- Run `yarn start:consumer` to start consumer from the topic

## Purge

- `kafka-topics.sh --bootstrap-server localhost:9092 --delete --topic simple-messaging-demo`