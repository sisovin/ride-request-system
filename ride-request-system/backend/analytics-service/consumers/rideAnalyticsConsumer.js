const { Kafka } = require('kafkajs');
const { saveRideAnalytics } = require('../database/analyticsDB');

const kafka = new Kafka({
  clientId: 'analytics-service',
  brokers: ['kafka:9092']
});

const consumer = kafka.consumer({ groupId: 'ride-analytics-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'ride-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const rideEvent = JSON.parse(message.value.toString());
      await saveRideAnalytics(rideEvent);
    },
  });
};

run().catch(console.error);
