var User = require('./../js/user.js').userModule;

var displayUserProfile = function(ghName, avatar, login, name, location, repoList) {
  $('.userProfile').append("<img src=" + avatar + ">");
  $('#userLogin').append("<h3>Username: " + login + "</h3>");
  $('#userName').text("Name: " + name);
  $('#userLocation').text("Location: " + location);
  $('#userRepoList').append("<a id=\"repos\" href=" + repoList + ">See Repository List</a>");
};

var displayUserRepoList = function(ghname, repos) {
  $('#userRepoList').text(repos);
};

$(document).ready(function() {
  var currentUser = new User();
  $('#submitUserName').click(function() {
    var ghName = $('#gitHubName').val();
    currentUser.getRepos(ghName, displayUserProfile);
  });

  $('#repos').click(function() {
    $('#submitUserName').click(function() {
    var ghName = $('#gitHubName').val();
    currentUser.getRepoList(ghName, displayUserRepoList);
  });
});
