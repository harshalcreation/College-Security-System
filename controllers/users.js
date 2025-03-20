const User = require("../Modules/user.js");


module.exports.signupform =(req, res) => {
	res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
	try {
		let { username, password, email } = req.body;
		let newUser = new User(
			{
				email,
				username
			}
		);
		let registerUser = await User.register(newUser, password);
		req.login(registerUser,(error)=>{
			if(error){
				 return next(error);
			}else{
				console.log(registerUser);
				req.flash("success",`Hi ${req.user.username}, Thanks for Registering to our website!`);
				res.redirect("/listings");
			}
		});

	} catch (error) {
		req.flash("error", error.message);
		res.redirect("/signup");
	}
}

module.exports.login = async (req, res) => {
	req.flash("success",`Hi ${req.user.username}, Thanks for Registering to our website!`);
	let redirectUrl = res.locals.redirectUrl || "/listings";
	// console.log(redirectUrl);
	res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logOut((error) => {
        if (error) {
            return res.status(500).send(error);
        }

        req.flash("success", "You have logged out successfully!");
        res.redirect("/listings");
    });
}
module.exports.chatwithus=(req,res)=>{
	const { type } = req.body;
  const targetNumber = type === 'customer' ? customerSupportNumber : emergencyCallNumber;

  if (!targetNumber) {
    return res.status(400).json({ message: 'Invalid call type' });
  }

  client.calls
    .create({
      url: 'http://demo.twilio.com/docs/voice.xml', // Replace with your TwiML URL if custom
      to: targetNumber,
      from: '+11234567890', // Replace with your Twilio verified number
    })
    .then(call => {
      res.status(200).json({ message: `Call initiated: ${call.sid}` });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Failed to initiate call' });
    });
};



