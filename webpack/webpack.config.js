module.exports = () => {
  let envConfig;
  if (process.env.NODE_ENV === 'production') {
    envConfig = require(`./webpack.prod.js`);
  } else {
    envConfig = require(`./webpack.dev.js`);
  }
  return envConfig;
};
