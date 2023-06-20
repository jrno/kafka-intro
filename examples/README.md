# Examples

All examples require a local broker to be set up.

Download and install from: https://kafka.apache.org/downloads

Set-up for `.bashrc` / `.zshrc`

```
export KAFKA_HOME="$HOME/kafka_2.12-3.3.1"
export PATH="$KAFKA_HOME/bin:$PATH"
```

## console-cli

Example of using the packaged cli tools such as `kafka-topics.sh`, `kafka-producer.sh` and `kafka-consumer.sh`

## simple-messaging

Example of using Kafka with NodeJS with the [KafkaJS](https://kafka.js.org/) library
