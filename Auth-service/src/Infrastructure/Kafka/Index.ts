import { Kafka,Producer, LegacyPartitioner, Partitioners } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'auth-service',
    brokers: ["localhost:29092"]
  })

  export const producer:Producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
  });
  export const consumer = kafka.consumer({groupId:"auth-service-kafka-group"})