import {Kafka} from 'kafkajs'
import * as readline from 'node:readline/promises'
import {stdin as input, stdout as output} from 'node:process'

const CLIENT_ID = process.env.LIENT_ID ?? 'simple-messaging-client-id'
const TOPIC = process.env.KAFKA_EXAMPLE_TOPIC ?? 'simple-messaging-demo'
const BROKER_HOST = process.env.KAFKA_EXAMPLE_BROKER_HOST ?? 'localhost'
const BROKER_PORT = process.env.KAFKA_EXAMPLE_BROKER_PORT ?? '9092'

const rl = readline.createInterface({input, output})

const kafka = new Kafka({
    clientId: CLIENT_ID,
    brokers: [`${BROKER_HOST}:${BROKER_PORT}`]
})

// https://kafka.js.org/docs/producing
const producer = kafka.producer({
    maxInFlightRequests: 1,
    allowAutoTopicCreation: true
});

async function send(message: string) {
    try {
        await producer.send({
            topic: TOPIC,
            messages: [{value: message}],
        });
    } catch (e) {
        console.error("Error when sending the message:", e);
    }
}

async function run() {
    console.log(`Connecting to Kafka Broker ${BROKER_PORT}:${BROKER_PORT}`)
    await producer.connect()

    console.log(`Push messages to ${TOPIC}, type 'exit' to stop`, '\n')
    while (true) {
        let input = await rl.question(`>>> ${TOPIC}: `)
        if (input === 'exit') {
            process.exit(0)
        }
        await send(input)
    }
}

run()