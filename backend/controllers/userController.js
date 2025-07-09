const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const register =async (req,res) =>{
try{
    const {username, email, password,role} = req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    const userData = new User({username,email,password:hashedPassword,role:role || "user"})
    userData.save()
    res.status(200).json({message:"user created successfully",data:userData})
    }
    catch(err){
        res.status(500).json({message:"internal server error"})
    }
}



const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};


 module.exports={
    register,
    login
}