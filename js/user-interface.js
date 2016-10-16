var User = require('./../js/user.js').userModule;

// function show_image(src, alt) {
//   var img = document.createElement("img");
//   img.src = response.avatar_url;
//   img.alt = 'user avatar';
//   document.body.appendChild(img);
// }

var displayLogin = function(ghName, loginData, name, location) {
  $('.userLogin').text("Username: " + loginData);
  $('.userName').text("Name: " + name);
  $('.userLocation').text("Location: " + location);
};

$(document).ready(function() {
  var currentUser = new User();
  $('#submitUserName').click(function() {
    var ghName = $('#gitHubName').val();
    currentUser.getRepos(ghName, displayLogin);
  });
});
