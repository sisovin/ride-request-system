const { Kafka } = require('kafkajs');
const rideService = require('../../ride-service/services/rideService');
const kafkaConfig = require('../config/kafkaConfig');

const kafka = new Kafka(kafkaConfig);
const consumer = kafka.consumer({ groupId: 'ride-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'ride-requests', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const rideRequest = JSON.parse(message.value.toString());
      await rideService.processRideRequest(rideRequest);
    },
  });
};

run().catch(console.error);
