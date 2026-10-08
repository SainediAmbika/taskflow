const UserService = require(
  "../services/user.service"
);

exports.register = async (
  req,
  res,
  next
) => {
  try {
    const {
      email,
      password,
      confirmPassword
    } = req.body;

    if (
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required"
      });
    }

    if (
      password !== confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Passwords do not match"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "Password must contain at least 6 characters"
      });
    }

    const user =
      await UserService.register(
        email,
        password
      );

    res.status(201).json({
      success: true,
      message:
        "Registration successful",
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (error) {
    if (
      error.message ===
      "User already exists"
    ) {
      return res.status(409).json({
        success: false,
        message: error.message
      });
    }

    next(error);
  }
};

exports.login = async (
  req,
  res,
  next
) => {
  try {
    const {
      email,
      password
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message:
          "Email and password are required"
      });
    }

    const user =
      await UserService.findByEmail(
        email
      );

    if (!user) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password"
      });
    }

    const isPasswordValid =
      await user.comparePassword(
        password
      );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid email or password"
      });
    }

    const token =
      UserService.generateToken(
        user
      );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};