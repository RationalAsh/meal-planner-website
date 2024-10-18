const API_URL = 'https://192.168.29.188:3000/api/v1';

// Function to perform an HTTP GET request to the test endpoint
export async function get_test() {
    const response = await fetch(`${API_URL}/test`);
    const data = await response.json();
    return data;
}