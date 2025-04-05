const axios = require('axios');

const mappingAPIConfig = {
  apiKey: process.env.MAPPING_API_KEY,
  routeURL: 'https://api.mapping.com/route',
  distanceURL: 'https://api.mapping.com/distance',
};

module.exports = mappingAPIConfig;
