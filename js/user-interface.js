var User = require('./../js/user.js').userModule;

var displayUserProfile = function(ghName, avatar, login, name, location, repoList) {
  $('#userLogin').append("<h3>GitHub Name: " + login + "</h3>");
  $('#userName').text("User's Name: " + name);
  $('#userLocation').text("User's Location: " + location );
  $('.userProfile').append("<img src=" + avatar + "> <hr>");
};

var displayUserRepoList = function(ghName, name, description) {
  $('#userRepoList').append("<h2> Repository Name: " + name + "</h2>" + " <h4>Repository Description: " + description + "</h4><br><br>");
};

$(document).ready(function() {
  var currentUser = new User();
  $('#submitUserName').click(function(event) {
    event.preventDefault();
    $('#userInput').hide();
    var ghName = $('#gitHubName').val();
    $('#gitHubName').val("");
    currentUser.getRepos(ghName, displayUserProfile);
    currentUser.getRepoList(ghName, displayUserRepoList);
  });
});
