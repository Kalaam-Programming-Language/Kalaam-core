// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    transform: {
        "^.+\\.jsx?$": "babel-jest"
  },
    
  };
  
  module.exports = config;
  
  // Or async function
  module.exports = async () => {
    return {
      verbose: true,
      rootDir:"tests"
    };
  };