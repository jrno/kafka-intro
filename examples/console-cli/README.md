# Kafka CLI

Bundled within Kafka distribution comes suite of utility shell scripts that can be used to interact with the cluster.

## Basic commands

List topics
`kafka-topics.sh --bootstrap-server localhost:9092 --list`

Create a topic
`kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic example-topic`

Describe a topic
`kafka-topics.sh --bootstrap-server localhost:9092 --describe --topic example-topic`

Remove a topic
`kafka-topics.sh --bootstrap-server localhost:9092 --delete --topic example-topic`

Inspect raw offsets
`kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic __consumer_offsets --from-beginning --formatter "kafka.coordinator.group.GroupMetadataManager\$OffsetsMessageFormatter"`

### Consumption as a group through CLI

Create a topic with multiple partitions
`kafka-topics.sh --bootstrap-server localhost:9092 --create --topic consumer-group-demo --partitions 3`

Produce messages with a key
`kafka-console-producer.sh --bootstrap-server localhost:9092 --topic consumer-group-demo --property parse.key=true --property key.separator=.`

Start consumers joining the same group. Start multiple for same group.
`kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic consumer-group-demo --group demo-app-1`

Check offsets for the group
`kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group demo-app-1`
