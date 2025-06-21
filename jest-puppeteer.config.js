module.exports = {
  launch: {
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  },
  server: {
    command: 'npm start',
    port: 8081,
    launchTimeout: 30000,
  },
}; 