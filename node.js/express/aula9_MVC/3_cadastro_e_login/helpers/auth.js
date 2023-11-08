module.exports.checkAuth = function(req, res, next){

    const userId = req.session.userId;
    console.log("User id é : ",userId);


    if(!userId){
        res.redirect('/')
    }

    next()
}