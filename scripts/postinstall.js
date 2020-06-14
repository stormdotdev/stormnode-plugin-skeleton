const fs = require('fs');

if (!fs.existsSync('.env')) {
  // there is not .env file yet, copy the example
  fs.copyFileSync('.env.example', '.env');
}

