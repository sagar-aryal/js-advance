const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/secrets");
const User = require("../models/user");

const verifyAuth = async (req, res, next) => {
  try {
    const auth = req.headers.authorization || "";

    const token = auth.split(" ")[1];
    if (!token) {
      throw new Error("Authentication token nor found");
    }

    const verify = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ _id: verify.id });
    req.user = user;
    next();
  } catch (error) {
    console.log("error:", error);
    throw new Error("Authentication could not be verified");
  }
};

module.exports = verifyAuth;
