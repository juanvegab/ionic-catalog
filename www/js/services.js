angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  var catalogs = [{
    id: 0,
    name: 'Catalogo 1',
    image: 'http://lorempixel.com/200/200/nature/0'
  },{
    id: 1,
    name: 'Catalogo 2',
    image: 'http://lorempixel.com/200/200/nature/1'
  },{
    id: 2,
    name: 'Catalogo 3',
    image: 'http://lorempixel.com/200/200/nature/2'
  },{
    id: 3,
    name: 'Catalogo 4',
    image: 'http://lorempixel.com/200/200/nature/3'
  },{
    id: 4,
    name: 'Catalogo 5',
    image: 'http://lorempixel.com/200/200/nature/4'
  },{
    id: 5,
    name: 'Catalogo 6',
    image: 'http://lorempixel.com/200/200/nature/5'
  },];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

angular.module('starter.services', [])

.factory('Catalogs', function() {
  var catalogs = [{
    id: 0,
    name: 'Catalogo 1',
    image: 'http://lorempixel.com/200/200/nature/0'
  },{
    id: 1,
    name: 'Catalogo 2',
    image: 'http://lorempixel.com/200/200/nature/1'
  },{
    id: 2,
    name: 'Catalogo 3',
    image: 'http://lorempixel.com/200/200/nature/2'
  },{
    id: 3,
    name: 'Catalogo 4',
    image: 'http://lorempixel.com/200/200/nature/3'
  },{
    id: 4,
    name: 'Catalogo 5',
    image: 'http://lorempixel.com/200/200/nature/4'
  },{
    id: 5,
    name: 'Catalogo 6',
    image: 'http://lorempixel.com/200/200/nature/5'
  },];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
