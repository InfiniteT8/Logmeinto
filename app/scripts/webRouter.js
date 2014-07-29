var webRouter = Backbone.Router.extend ({
	routes: {
		'' : 'register',
		'login' : 'login',
		'admin/:id' : 'admin',
	},

	signUp: function () {
					$('.signupform').show();
					$('.signinform').hide();
			new RegView();
	},
});
