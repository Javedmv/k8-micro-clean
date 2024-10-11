import { Kafka,Producer } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'product-service',
    brokers: ["localhost:29092"]
  })

  export const producer:Producer = kafka.producer();
  export const consumer = kafka.consumer({groupId:"product-service-kafka-group"})