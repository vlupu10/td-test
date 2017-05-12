export const test01 = {
    template: require('./app.html'),
    controller($scope, $log, Test01Service) {
    	$scope.options = Test01Service.getData();
		$scope.toOne = false;
		$scope.toLeft = false;
		$scope.toMiddle = true;
		if ($scope.options.length % 2) {
			$scope.toLeft = true;
			$scope.toMiddle = false;
		}
		if ($scope.options.length === 1) {
			$scope.toOne = true;
			$scope.toMiddle = false;
			$scope.toLeft = false;
		}
    }
};
