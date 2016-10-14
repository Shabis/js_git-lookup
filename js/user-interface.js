var User = require('./../js/user.js').userModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var searchedUser = new User();
  $('#ghNameSearch').click(function() {
    var ghName = $('#gitHubName').val();
    $('#gitHubName').val("");
    $.get('https://api.github.com/users?q=' + ghName + '?access_token=' + apiKey, function(response) {
      $('.box').text(response.login);;
    });
    // searchedUser.getRepos(searchedUser.ghName);
  });
});
