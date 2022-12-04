const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  try {
    let salt = await bcrypt.genSalt(10);
    hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

const compareHash = async (planeString, hash) => {
  try {
    const isValidPassword = await bcrypt.compare(planeString, hash);
    return isValidPassword;
  } catch (error) {
    throw error;
  }
};

module.exports = { hashPassword, compareHash };
