module.exports = {
  redis: {
    'host': process.env.REDIS_HOST,
    'port': process.env.REDIS_PORT,
    'password': process.env.REDIS_PASS,
    'database': 0
  },
  azure: {
    'account_name': process.env.STORAGE_ACCOUNTNAME,
    'access_key': process.env.STORAGE_ACCESSKEY
  },
  platforms: ['windows10', 'windows', 'android', 'ios', 'web', 'androidTWA', 'samsung'],
  images: {
    generationSvcUrl: process.env.IMG_GEN_SVC_URL || 'http://appimagegenerator-prod.azurewebsites.net'
  },
  serviceWorkerChecker: {
    timeout: 2500
  }
};
