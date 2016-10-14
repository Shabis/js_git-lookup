var apiKey = require('./../.env').apikey;

User = function() {
};

User.prototype.getRepos = function(githubName, name, url, location) {
  $.get('https://api.github.com/users/' + githubName + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
