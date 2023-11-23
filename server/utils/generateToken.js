import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "prochess_mohit", {
    expiresIn: "30d",
  });
};

export default generateToken;
