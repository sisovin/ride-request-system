const admin = require('firebase-admin');
const serviceAccount = require('../config/firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.sendPushNotification = async (token, message) => {
  try {
    const response = await admin.messaging().send({
      token: token,
      notification: {
        title: message.title,
        body: message.body,
      },
    });
    return response;
  } catch (error) {
    throw new Error('Error sending push notification: ' + error.message);
  }
};
