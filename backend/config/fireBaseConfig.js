const admin= require('firebase-admin')

var serviceAccount = require('./ServiceAccount')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
