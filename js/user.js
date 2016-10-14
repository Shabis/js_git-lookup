var apiKey = require('./../.env').apiKey;

User = function(ghName) {
  this.ghName = ghName;
};

// User.prototype.getRepos = function(ghName, userInfo, fail) {
//   $.get('https://api.github.com/users?q=' + ghName + '?access_token=' + apiKey).then(function(response) {
//     $('.box').text(response.login);
//     alert("complete");
//   }).fail(function(error) {
//     $('.box').text("The information you are looking for could not be found. Please try a different search.");
//   });
// };

exports.userModule = User;
