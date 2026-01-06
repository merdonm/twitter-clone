import AuthModel from "../models/auth.models.js";

export const SignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("Email and password are required");
      error.status = 400;
      throw error;
    }
    const user = await AuthModel.findOne({ email }).select("+password");
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res
      .status(200)
      .json({ success: true, message: "Sign-in successful", user });
  } catch (error) {
    next(error);
  }
};
