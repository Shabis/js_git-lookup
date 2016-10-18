var User = require('./../js/user.js').userModule;

var displayUserProfile = function(ghName, avatar, login, name, location, repoList) {
  $('.userProfile').append("<img src=" + avatar + ">");
  $('#userLogin').append("<h3>GitHub Name: " + login + "</h3>");
  $('#userName').text("User's Name: " + name);
  $('#userLocation').text("User's Location: " + location);

};

var displayUserRepoList = function(ghName, name, description) {
  $('#userRepoList').append("<li> Repository Name: " + name + "</li>" + "Repository Description: " + description + "<br><br>");
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
