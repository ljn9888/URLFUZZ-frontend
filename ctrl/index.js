
(function () {
    angular.module('app', ['navservice', 'httpservice'])
        .controller('index_ctrl', IndexController);
    
    function IndexController($scope, $http, $interval, NavHeaderService){
        $scope.inputurl = "";
        $scope.search = "";
        NavHeaderService.navheader_init(true);
 

//////////////////////////////
        // var c=0;
        // $scope.message="This DIV is refreshed "+c+" time.";
        // $interval(function() {
        //         $scope.message="This DIV is refreshed "+c+" time.";
        //         c++;
        // },1000);
        var result = document.getElementById("result");
        
        /////////////////
        $scope.to_backend = function(){
            alert('d');
            // $http.post('http://0.0.0.0:8082', inputurl);
            $interval(function() {
                $http({method :'GET', url: 'http://0.0.0.0:8082'}).
                then(function(response) {
                    if(response.data != $scope.search && response.data != 'Request failed') {
                        $scope.search = response.data ;
                        var tag = document.createElement("tr");
                        var text = document.createTextNode($scope.search);
                        tag.appendChild(text);
                        result.appendChild(tag);
                    }
              });
              }, 5);





            };
            // function(){
            
            // $scope.search  =  $http.get('http://0.0.0.0:8082/');
            // };
        }
    }
)();



// (function () {
//     angular.module('app', ['navservice', 'httpservice'])
//         .controller('index_ctrl', IndexController);
    
//     function IndexController($scope, $http, NavHeaderService){
//         $scope.inputurl = "";
//         $scope.search;
//         NavHeaderService.navheader_init(true);
//         $scope.to_backend = function(){
//             search = function(){
//                 return $http.get(url);
//             };
//         }
//     }
// })();