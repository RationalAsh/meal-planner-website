import axios from "axios";

const API_URL = 'http://192.168.29.188:8000/api/v1';

// Function to perform an HTTP GET request to the test endpoint
export async function get_test() {
    // Make a GET request to the test endpoint and get the response
    // as JSON.
    const response = await axios.get(`${API_URL}/test`);
    return response.data;
}