import jwt from "jsonwebtoken";
export const sendCookie=(user, res, message, statusCode=200)=>{
  try {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                
    res
      .status(statusCode)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
      })
      .json({
        success: true,
        message,
      });
  } catch (error) {
    console.error("JWT signing error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};