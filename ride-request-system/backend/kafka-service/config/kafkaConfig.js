const { Kafka } = require('kafkajs');

const kafkaConfig = {
  clientId: 'kafka-service',
  brokers: ['kafka:9092']
};

module.exports = kafkaConfig;
