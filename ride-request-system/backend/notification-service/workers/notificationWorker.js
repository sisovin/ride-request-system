const Queue = require('bull');
const pushNotificationService = require('../services/pushNotification');
const smsService = require('../services/smsService');

const notificationQueue = new Queue('notificationQueue', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
});

notificationQueue.process(async (job, done) => {
  const { type, data } = job;

  try {
    if (type === 'push') {
      await pushNotificationService.sendPushNotification(data.token, data.message);
    } else if (type === 'sms') {
      await smsService.sendSMS(data.to, data.message);
    }
    done();
  } catch (error) {
    done(new Error('Error processing notification job: ' + error.message));
  }
});

notificationQueue.on('completed', (job, result) => {
  console.log(`Notification job ${job.id} completed with result: ${result}`);
});

notificationQueue.on('failed', (job, err) => {
  console.error(`Notification job ${job.id} failed with error: ${err.message}`);
});

module.exports = notificationQueue;
