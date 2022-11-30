let users = [];

const userModel = {
  loginUser: () => {
    return users;
  },

  registerUser: (user) => {
    users.push(user);
  },
};

module.exports = userModel;
