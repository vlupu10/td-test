export const test01 = {
    template: require('./app.html'),
    controller($scope, $log, Test01Service) {
    	$scope.options = Test01Service.getData();
    	$log.info($scope.options);
    }
};
