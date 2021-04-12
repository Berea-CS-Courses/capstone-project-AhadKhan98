const User = require("../models/User");

exports.registerNewUser = async (userData) => {
  if (
    userData.firstName &&
    userData.lastName &&
    userData.email &&
    userData.password
  ) {
    const newUser = new User(userData);
    const result = await newUser
      .save()
      .then((user) => {
        console.log("saved new user");
        return user;
      })
      .catch((err) => {
        console.log("unable to save new user");
        return false;
      });
    return result;
  } else {
    console.log("user data incorrect");
    return false;
  }
};

exports.loginUser = async (userData) => {
  if (userData.email && userData.password) {
    const findUserInDb = await User.findOne({
      email: userData.email,
      password: userData.password,
    }).exec();
    if (!findUserInDb) {
      return false;
    } else {
      return findUserInDb;
    }
  }
};
