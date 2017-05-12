export const test01 = {
    template: require('./app.html'),
    transclude: true,
    controller($scope, $log, Test01Service, $translate, $window) {
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
		//$translate.use('fr');
		$scope.changeLang = function ($event) {
			if ($event.target.textContent === 'English') {
				$translate.use('en');
			} else {
				$translate.use('fr');
			}

			$scope.$broadcast('langEvt');			
		};
    }
};
