(
    function () {
        angular.module('MockApp')
            .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function config($stateProvider, $urlRouterProvider) {
            //Route to login page.
            $urlRouterProvider.otherwise('/login');

            //States in the application
            $stateProvider
                .state('login',{
                    url:'/login',
                    templateUrl:'components/login/login.html',
                    controller:'LoginController as loginCtrl'
                });
        }
    }
)();