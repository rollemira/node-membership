var User = require('../models/user');
var Application = require('../models/application');

var RegResult = function() {
    var result = {
        success: false,
        message: null,
        user: null
    };
    return result;
};

var validateInputs = function(app) {
    if(!app.email || !app.password) {
        app.setInvalid("Email and password are required");
    } else if(app.password !== app.confirmPassword) {
        app.setInvalid("Passwords do not match");
    } else {
        app.validate();
    }
};

exports.applyForMembership = function(args) {
    var regResult = new RegResult();
    var app = new Application(args);

    validateInputs(app);

    if (app.isValid()) {
        //success
        regResult.success = true;
        regResult.message = "Welcome!";
        regResult.user = new User(args);
    }

    return regResult;
};