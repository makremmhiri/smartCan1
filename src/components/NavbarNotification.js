const axios = require('axios');

// Function to fetch notifications
const fetchNotifications = async () => {
  try {
    const response = await axios.get('http://your-api-url/api/notifications'); // Replace 'http://your-api-url/api/notifications' with your actual API endpoint
    const notifications = response.data;
    if (notifications.length > 0) {
      notifications.forEach((notification, index) => {
        console.log(`${index + 1}. ${notification.message} - ${notification.timestamp}`);
      });
    } else {
      console.log('No notifications found.');
    }
  } catch (error) {
    console.error('Error fetching notifications:', error.message);
  }
};

// Call fetchNotifications function to simulate onClick event
fetchNotifications(); // You can call this function to simulate the onClick event

// Note: In a real application, you would integrate this logic with your server-side code and handle the response accordingly.
