const customError = require('./customError');
const mailBoxLayerAPI = require('../helpers/mailBoxLayerAPI');

module.exports = async (email) => {
  const { error, did_you_mean } = await mailBoxLayerAPI(email);
  console.log(error, did_you_mean);
  if (error) {
    const { code, type, info } = error;
    throw new customError({ type, info }, code);
  }
  if (did_you_mean){
    throw new customError({ message: "Invalid email", did_you_mean }, 401);
  }
};