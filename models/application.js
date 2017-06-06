var Application = function(args) {
    var app = {};
    app.email = args.email;
    app.password = args.password;
    app.confirmPassword = args.confirmPassword;
    app.status = 'pending';
    app.message = null;

    app.isValid = function() {
        return app.status === 'validated';
    };
    app.isInvalid = function () {
        return !app.isValid()
    };
    app.setInvalid = function (message) {
        app.status = 'invalid';
        app.message = message;
    };
    app.validate = function (message) {
        app.status = 'validated';
    };
    return app;
};

module.exports = Application;