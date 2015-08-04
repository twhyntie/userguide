'use strict';

exports.port = process.env.PORT || 3000;

// For retrieving (local) environment variables.
var env = require('node-env-file');
//
if (!process.env.MONGOLAB_URI) {
  console.log('process.env.MONGOLAB_URI is undefined - dev mode?');
  // If we're in development, get the environment variables.
  env(__dirname + '/.env');
}

exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/drywall'
};
exports.companyName = process.env.PROJECT_NAME || 'Acme Ltd.';
exports.projectName = 'UserGuide';
exports.systemEmail = process.env.SENDGRID_USERNAME || process.env.SYSTEM_EMAIL_ADDRESS || 'your@email.com';
exports.cryptoKey = 'k3yb0ardc4t';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' Website',
    address: process.env.SMTP_FROM_ADDRESS || process.env.SENDGRID_USERNAME || ''
  },
  credentials: {
    user: process.env.SMTP_USERNAME || process.env.SENDGRID_USERNAME || '',
    password: process.env.SMTP_PASSWORD || process.env.SENDGRID_PASSWORD || '',
    host: process.env.SMTP_HOST || 'smtp.sendgrid.net' || '',
    ssl: false
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
