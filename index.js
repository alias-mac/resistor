require('@babel/register')({
  root: __dirname,
  extensions: ['.js'],
});
require('./src/server.js');
