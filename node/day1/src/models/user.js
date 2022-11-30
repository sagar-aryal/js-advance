let users = [];

const userModel = {
  getUsers: () => {
    return users;
  },

  postUser: (user) => {
    users.push(user);
  },
};

module.exports = userModel;
