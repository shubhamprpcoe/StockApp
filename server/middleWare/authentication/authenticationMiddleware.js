const { verify } = require("jsonwebtoken");
const { verifyJwtToken } = require("../../utils/genrateJwtToken");
const UserSignUpModel = require("../../models/users");

const isUserAuthenticate = async (req, res, next) => {
  let headerBearerToken;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // get token from user header responce
      // eslint-disable-next-line prefer-destructuring
      headerBearerToken = authorization.split(" ")[1];

      //   verifying token
      const verifiedUserId = verifyJwtToken(headerBearerToken);

      // get password by providing user id in DB and assign to req
      const userFilds = await UserSignUpModel.findById(verifiedUserId).select("Password");
      req.user = [verifiedUserId, userFilds];
      next();
    } catch (error) {
      return res.status(406).send({ status: "failded", message: "filds are missing 3" });
    }
  }
};

module.exports = isUserAuthenticate;
