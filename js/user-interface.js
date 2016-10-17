var User = require('./../js/user.js').userModule;

var displayUserProfile = function(ghName, avatar, login, name, location, repoList) {
  $('.userProfile').append("<img src=" + avatar + ">");
  $('#userLogin').append("<h3>Username: " + login + "</h3>");
  $('#userName').text("Name: " + name);
  $('#userLocation').text("Location: " + location);

};

var displayUserRepoList = function(ghName, name) {
  $('#userRepoList').append("<li> Name: " + name + "</li>");
};

$(document).ready(function() {
  var currentUser = new User();
  $('#submitUserName').click(function(event) {
    event.preventDefault();
    var ghName = $('#gitHubName').val();
    $('#gitHubName').val("");
    currentUser.getRepos(ghName, displayUserProfile);
    currentUser.getRepoList(ghName, displayUserRepoList);
  });
});
