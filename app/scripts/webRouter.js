var webRouter = Backbone.Router.extend ({
	routes: {
		'' : 'register',
		'login' : 'login',
	},
//routes user to register, login, and admin sessions.
	register: function () {
					$('.signupform').show();
					$('.signinform').hide();
			new RegView();
	},
});
