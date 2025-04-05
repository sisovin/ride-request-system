import axios from 'axios';

const API_URL = 'http://localhost:5000/api/rides';

export const createRide = async (rideData) => {
  try {
    const response = await axios.post(API_URL, rideData);
    return response.data;
  } catch (error) {
    console.error('Error creating ride:', error);
    throw error;
  }
};

export const getRideById = async (rideId) => {
  try {
    const response = await axios.get(`${API_URL}/${rideId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ride:', error);
    throw error;
  }
};

export const updateRide = async (rideId, rideData) => {
  try {
    const response = await axios.put(`${API_URL}/${rideId}`, rideData);
    return response.data;
  } catch (error) {
    console.error('Error updating ride:', error);
    throw error;
  }
};

export const deleteRide = async (rideId) => {
  try {
    const response = await axios.delete(`${API_URL}/${rideId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting ride:', error);
    throw error;
  }
};
