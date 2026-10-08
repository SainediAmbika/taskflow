const jwt = require("jsonwebtoken");

const User = require(
  "../models/user.model"
);

class UserService {
  static async register(
    email,
    password
  ) {
    const existingUser =
      await User.findOne({
        email
      });

    if (existingUser) {
      throw new Error(
        "User already exists"
      );
    }

    return User.create({
      email,
      password
    });
  }

  static async findByEmail(
    email
  ) {
    return User.findOne({
      email
    });
  }

  static generateToken(user) {
    return jwt.sign(
      {
        userId: user._id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn:
          process.env.JWT_EXPIRES_IN ||
          "1h"
      }
    );
  }
}

module.exports = UserService;