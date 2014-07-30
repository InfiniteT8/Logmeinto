Parse.initialize("rsX3pvOkL0hERWukcvb3wu79SHi4sv9djUMe8CG9", "eLfzTR5hEWBaTi7dxqxdsGE0Bwav9BgklKSniOQv");

var User = Parse.Object.extend({

	className: "user",

	 defaults:{
	 username: '',
	 password: ''
},
  idAttribute: "objectId" ,

  initialize: function (){
    console.log("a new post has been created.");
  }
});

var UserCollection = Parse.Collection.extend({

    model: User,
});

var cool_users = new UserCollection();
