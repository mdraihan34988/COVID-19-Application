const URl="https://covid19.mathdro.id/api";
let app = angular.module("MyApp",[]);

app.controller("MyCtrl",($scope,$http)=>{
    $scope.title="Stay Home Stay Safe";
    $http.get(URl).then(
        (response)=>{
            $scope.case_data=response.data;
        },
        (error)=>{
            console.log(error);
        }


    );
    $scope.get_country_data=()=>{
        let c=$scope.country;
        $scope.con=c;
        if(c=="")
        {
            $scope.c_data=undefined;
            return;
        }
        else{
            $http.get(URl+'/countries/'+c).then(
                (response)=>{
                    $scope.c_data=response.data;
                },
                (error)=>{
                    console.log(error);
                }
        
        
            );

        }
        

    };

});

