const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const delAsync = promisify(client.del).bind(client);

client.on('error', (err) => {
  console.error('Redis error:', err);
});

exports.acquireLock = async (lockKey, ttl) => {
  const result = await setAsync(lockKey, 'locked', 'NX', 'EX', ttl);
  return result === 'OK';
};

exports.releaseLock = async (lockKey) => {
  const result = await delAsync(lockKey);
  return result === 1;
};

exports.isLocked = async (lockKey) => {
  const result = await getAsync(lockKey);
  return result === 'locked';
};
