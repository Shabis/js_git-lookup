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

User.prototype.getRepoList = function(ghName, displayUserRepo) {
  var repositories = [];
  $.get('https://api.github.com/users/' + ghName +'/repos?access_token=' + apiKey).then(function(repository) {
    for (var i = 0; i < repository.length; i++) {
      repositories.push(repository[i]);
      console.log(repositories);
    } repositories.forEach(function(repository) {
        displayUserRepo(ghName, repository.name, repository.description);
    });
  });
};

exports.userModule = User;
