import axios from "axios";

const JSON_URL = '/src/dataContent/chant.json'; // Update the URL to your JSON file

export const fetchData = async () => {
  try {
    const response = await axios.get(JSON_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (data: unknown) => {
  try {
    const response = await axios.post(JSON_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};