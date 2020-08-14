const jwt = require('jsonwebtoken');
const formResponse = require('../Forms/formRespone');

const checkToken = (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
        res.json({
            msg: "Please login first..!",
        })
    }
    try {
        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.decodedToken = decoded;
        next();
    } catch (e) {
        formResponse.error(res, e);
    }
}

module.exports = checkToken;