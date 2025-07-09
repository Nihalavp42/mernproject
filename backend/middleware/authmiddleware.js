const jwt = require("jsonwebtoken")
const authmiddleware= (req,res,next) =>{
const token = req.header("Authorization")?.split(" ")[1];
console.log(token)
 if (!token) return res.status(401).json({ message: 'No token' });
try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = decoded.id;
    req.role = decoded.role
    console.log(req.user)
    next()
 } catch (err) {
    res.status(401).json({ message: 'Token invalid' });
  }

}
module.exports = authmiddleware