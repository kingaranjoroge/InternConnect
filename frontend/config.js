const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  serverUrl: isDevelopment
    ? 'http://localhost:3000'
    : 'https://internconnect-yg04.onrender.com'
};

export default config;