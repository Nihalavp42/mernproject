const checkRole = (requiredRole) =>{
return (req,res,next)=>{
    const userRole = req.role;
    if(userRole !== requiredRole) return res.status(403).json({message:"forbidden.Access danied"})
next()
}
}
module.exports = checkRole