'use strict';
angular.module('confusionApp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'
                   }
                }
            })
                    // route for the contactus page
            .state('app.contactUs', {
                url:'contactUs',
                views: {
                    'content@': {
                        templateUrl : 'views/contactUs.html',
                        controller  : 'ContactController'
                     }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.details', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/details.html',
                        controller  : 'DishDetailController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    })

;