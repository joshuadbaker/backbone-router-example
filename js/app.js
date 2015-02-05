var dogs = new Dogs(); //Create a new Dogs Colleciton.
var router = new Router(); // Create a new Router to handle routes.
Backbone.history.start(); // Start tracking route's history
router.navigate('dogs'); // Start our app at the #dogs route by default.