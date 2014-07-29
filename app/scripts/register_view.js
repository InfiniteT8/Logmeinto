var RegView = Backbone.View.extend ({

    el: '.maincontain',

    events: {
        'click .regUser ': 'createNewuser',
        'click .logmein': 'login',
    },

    initialize: function (){
        $('.signupform').show();
    },

    render:function (){
    },

    CreateUser: function(event){

        event.preventDefault();
        var user = new Parse.User();
        user.set("username", $("#regname").val());
        user.set("password", $("#regpassword").val());
        user.set("email", $("#regemail").val());
        user.signUp(null, {
              success: function(user) {
                // Access granted!
                $('.signupform').hide();
                // $('.user_content').show();
                new MainView();
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
              }
        });

        $(this).trigger('reset');
    },

    // showloginform: function (){
    //     $('.signupform').hide();
    //     $('.signinform').show();
    // },

    // showregisterform: function (){
    //     $('.signinform').hide();
    //     $('.signupform').show();
    // },

    // login: function (event){
    //     $('.signupform').hide();
    //     $('.signinform').hide();

    //     event.preventDefault();
    //     var username = $("#username").val();
    //     var password = $("#password2").val();

    //     Parse.User.logIn( username, password, {
    //         success: function(user) {
    //           $('.user_content').show();
    //           new contentListView({ collection: cool_users});
    //           new MainNavView();
    //           // Do stuff after successful login.
    //         },
    //         error: function(user, error) {
    //           // The login failed. Check error to see why.
    //         }
    //     });
    // }
});
