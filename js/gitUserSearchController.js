githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var accessToken = '3c68bd2439ad3efb99c24453530bddb1b5ea9799'

  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      {
        q: self.searchTerm,
        access_token: self.accessToken
      
      }
    );
  };

}]);