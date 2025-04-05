const axios = require('axios');
const mappingAPIConfig = require('../config/mappingAPI');

exports.getRoute = async (startLocation, endLocation) => {
  try {
    const response = await axios.get(mappingAPIConfig.routeURL, {
      params: {
        start: startLocation,
        end: endLocation,
        key: mappingAPIConfig.apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching route: ' + error.message);
  }
};

exports.getDistance = async (startLocation, endLocation) => {
  try {
    const response = await axios.get(mappingAPIConfig.distanceURL, {
      params: {
        start: startLocation,
        end: endLocation,
        key: mappingAPIConfig.apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching distance: ' + error.message);
  }
};
