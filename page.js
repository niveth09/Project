var myApp = angular.module("myCount",0);

myApp.controller("myAppContoller",function($scope)
{
    $scope.count = 0;
    $scope.upvote = function()
    {
        $scope.count++;
        return count;
    }
    $scope.downvote = function()
    {
        $scope.count--;
        return count;
    }
}
)