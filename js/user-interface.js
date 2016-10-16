var User = require('./../js/user.js').userModule;

var displayLogin = function(ghName, avatar, login, name, location) {
  $('.userProfile').append("<img src=" + avatar + ">");
  $('#userLogin').text("Username: " + login);
  $('#userName').text("Name: " + name);
  $('#userLocation').text("Location: " + location);
};

$(document).ready(function() {
  var currentUser = new User();
  $('#submitUserName').click(function() {
    var ghName = $('#gitHubName').val();
    currentUser.getRepos(ghName, displayLogin);
  });
});
