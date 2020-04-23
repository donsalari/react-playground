const commonConfig = require("./config/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = () => {
  const env = process.env.NODE_ENV === "production" ? "prod" : "dev";
  const envConfig = require(`./build-utils/webpack.${env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig);

  return mergedConfig;
};
