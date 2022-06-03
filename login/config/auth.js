const jwt = require("jsonwebtoken");
const Users = require("./models/user")


const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, "thisjbsjbfjdbszzshhsdvf")
        const rootUser = await add.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) { throw new Error('User not Found') }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (err) {
        console.log("unauthorized required to token login");
    }


}
module.exports = { auth };