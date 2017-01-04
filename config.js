module.exports = {
  server: {
    databaseURI: '8421975bdabd4486b693d10ca0f7d261/iad1-c18-0.mongo.objectrocket.com:51241,iad1-c18-2.mongo.objectrocket.com:51241,iad1-c18-1.mongo.objectrocket.com:51241/altgabetest', // Connection string for your MongoDB database
    cloud: './cloud/main.js', // Absolute path to your Cloud Code
    appId: 'ojQS3VbZhl13BOcG4CMIsHKr2xZvz1kg0tdvqQJq',
    masterKey: 'BndVAXUAXeFE4XxXFOfEm1Be4FgbSU19cTVUq6to',
    serverURL: 'https://altcharles.azurewebsites.net:1337/parse'
  },
  dashboard: {},
  storage: {},
  push: {}
};
