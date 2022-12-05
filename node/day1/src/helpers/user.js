const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/secrets");

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

const compareHash = async (plainString, hash) => {
  try {
    const isValidPassword = await bcrypt.compare(plainString, hash);
    return isValidPassword;
  } catch (error) {
    throw error;
  }
};

const generateToken = ({ id, email }) => {
  console.log(id);
  try {
    const token = jwt.sign({ id, email }, JWT_SECRET, {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    });

    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = { hashPassword, compareHash, generateToken };
