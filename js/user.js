var apiKey = require('./../.env').apiKey;

User = function() {
};

User.prototype.getRepos = function(ghName, displayUser) {
  $.get('https://api.github.com/users/' + ghName + '?access_token=' + apiKey).then(function(profile) {
    displayUser(ghName, profile.avatar_url, profile.login, profile.name, profile.location, profile.repos_url);
  }).fail(function(error) {
    $('.error').text("The GitHub username you are looking for could not be found. Please check your spelling and try again.");
  });
};

User.prototype.getRepoList = function(ghName, displayUser) {
  $.get('https://api.github.com/users/' + ghName +'/repos?access_token=' + apiKey).then(function(repository) {
    for (i = 0; i < repository.Length; i++) {
    displayUser(ghName, repository.description);
  };
  }).fail(function(error) {
    $('.error').text("No Repositories were found.");
  });
};

exports.userModule = User;
