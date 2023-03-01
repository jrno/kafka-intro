import {Kafka} from "kafkajs";

const CLIENT_ID = process.env.LIENT_ID ?? 'simple-messaging-client-id'
const TOPIC = process.env.KAFKA_EXAMPLE_TOPIC ?? 'simple-messaging-demo'
const BROKER_HOST = process.env.KAFKA_EXAMPLE_BROKER_HOST ?? 'localhost'
const BROKER_PORT = process.env.KAFKA_EXAMPLE_BROKER_PORT ?? '9092'

const kafka = new Kafka({
    clientId: CLIENT_ID,
    brokers: [`${BROKER_HOST}:${BROKER_PORT}`]
})

// https://kafka.js.org/docs/consuming
const consumer = kafka.consumer({
    groupId: `${CLIENT_ID}-group`,
    maxInFlightRequests: 1
});

async function run() {
    console.log(`Connecting to Kafka Broker ${BROKER_HOST}:${BROKER_PORT}`)
    await consumer.connect()
    await consumer.subscribe({
        topic: TOPIC
    })

    // Also possible to have callbacks for each batch
    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
            console.log(`- ${prefix} ${message.key}#${message.value}`)
        },
    })
}

run()
