const User = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
       try {
              let password = await bcrypt.hash(req.body.password, 10);
              
              const user = await User.create({
                     name: req.body.name,
                     email: req.body.email,
                     password: password,
              })

              const token = jwt.sign({ userId: user.id }, 'android', {
                     expiresIn: '1h',
              });
              return res.json({
                     message: 'registered success',
                     data: {
                            token: token,
                            user: user,
                     }
              });
       }catch (error) {
              res.status(500).json({ error: 'register failed' });
       }
}

const login = async (req,res) => {
       try {
              
              const user = await User.findOne({where:{email: req.body.email}});
              const passwordMatch = await bcrypt.compare(req.body.password, user.password);

              if (!passwordMatch) {
                     return res.status(500).json({ error: 'password or email is wrong' });
              }

              const token = jwt.sign({ userId: user.id }, 'android');

              return res.json({
                     message: 'login success',
                     data: {
                            token: token,
                            user: user,
                     }
              });
       }catch (error) {
              res.status(500).json({ error: 'login failed' });
       }
}

module.exports = {register,login};