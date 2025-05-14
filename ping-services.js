// simplified-ping-render-services.js
import fetch from 'node-fetch';

// Add the URLs of ALL your Render services that need to be kept awake
const SERVICE_URLS = [
  'https://laboratorybacteriologyresearch.onrender.com/', // Replace with your Strapi backend URL
  'https://laboratorybacteriologyresearch-8sxe.onrender.com/', // Replace with your frontend service URL (if it also sleeps)
  // Add more URLs here if needed
];

async function pingService(url) {
  try {
    console.log(`Pinging service at ${url} at ${new Date().toISOString()}`);
    const response = await fetch(url);
    if (response.ok) {
      console.log(`Ping successful for ${url}! Status: ${response.status}`);
    } else {
      console.error(`Ping failed for ${url}! Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error during ping for ${url}:`, error);
  }
}

async function pingAllServices() {
  console.log(`Render services pinger started. Pinging ${SERVICE_URLS.length} service(s).`);
  for (const url of SERVICE_URLS) {
    await pingService(url); // Use await here to ping one by one if preferred, or remove await to ping concurrently
  }
  console.log('Render services pinger finished.');
}

// Execute the ping logic once when the script is run
pingAllServices();