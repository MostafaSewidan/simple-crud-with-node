
const jwt = require('jsonwebtoken');
const User = require("../Models/User");

const auth = async (req, res, next) => {
       try {
              const authHeader = req.headers.authorization;  
              const token = authHeader.split(" ")[1];

              if (token){
                     
                     const decoded = jwt.verify(token, 'android');
                     const requestUser = await User.findByPk(decoded.userId);
                     req.requestUser = requestUser;
                     
                     next();
              }else{

                     res.status(401).json({ message: 'unauthntication' });
              }

       }catch (error) {
              res.status(401).json({ message: 'unauthntication' });
       }
}

module.exports = {auth};