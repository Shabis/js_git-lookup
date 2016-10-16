var apiKey = require('./../.env').apiKey;

User = function() {
};

User.prototype.getRepos = function(ghName, displayUser) {
  $.get('https://api.github.com/users/' + ghName + '?access_token=' + apiKey).then(function(response) {
    displayUser(ghName, response.login, response.name);
  }).fail(function(error) {
    $('.error').text("The information you are looking for could not be found. Please try a different search.");
  });
};

exports.userModule = User;
