const { Kafka } = require('kafkajs');
const { v4: uuidv4 } = require('uuid');

const kafka = new Kafka({
  clientId: 'ride-producer',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

const publishRideRequest = async (rideRequest) => {
  await producer.connect();
  const rideRequestId = uuidv4();
  await producer.send({
    topic: 'ride-requests',
    messages: [
      { key: rideRequestId, value: JSON.stringify(rideRequest) }
    ]
  });
  await producer.disconnect();
};

module.exports = {
  publishRideRequest
};
