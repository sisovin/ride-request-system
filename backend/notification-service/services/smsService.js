const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

exports.sendSMS = async (to, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      to: to,
      from: process.env.TWILIO_PHONE_NUMBER,
    });
    return response;
  } catch (error) {
    throw new Error('Error sending SMS: ' + error.message);
  }
};
