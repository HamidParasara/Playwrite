module.exports = {
    // Other Jest configurations...
    reporters: [
      'default',
      '@shelex/jest-allure'
    ],
    setupFilesAfterEnv: [
      '@shelex/jest-allure/dist/setup' // Add this line
    ],
  };
  