const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'driver-assignment-service',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'driver-assignment-group' });

const connectProducer = async () => {
  await producer.connect();
};

const connectConsumer = async () => {
  await consumer.connect();
};

module.exports = {
  producer,
  consumer,
  connectProducer,
  connectConsumer
};
