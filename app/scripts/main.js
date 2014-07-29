Parse.initialize("9coNa0L8MQ8nm2CvMJfomY6Mnr0GnuBi9PVGxwZL", "GN4iNmMBXWZoY6roD3HXMHE407WGPMA9XvaC4Wq3");


var cool_users = new UserCollection();

/* GET ALL THE USER DATA */
cool_users.fetch().done(function (){
			window.router = new webRouter();
			Backbone.history.start();
});