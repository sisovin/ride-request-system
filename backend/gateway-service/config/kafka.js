const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'gateway-service',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();
};

module.exports = {
  producer,
  connectProducer
};
