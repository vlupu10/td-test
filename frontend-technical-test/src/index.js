import angular from 'angular';
import {ngAnimate} from 'angular-animate';
import {ngSanitize} from 'angular-sanitize';
import 'angular-translate';
import 'angular-ui-bootstrap';

import 'angular-ui-router';
import routesConfig from './routes';

import translateConfig from './translations';

import {hello} from './app/hello';
import {test01} from './test01/app';
import {test02} from './test02/app';

import './index.scss';



export const app = 'app';

angular.module(app, ['ngAnimate', 'ngSanitize','ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
.factory('Test01Service', () => {
	var json = require('!json-loader!./test01/data.json');
    return {
	    getData () {
		    return angular.fromJson(json);
	    }
    };
})
.config(routesConfig)
.config(translateConfig)
.directive('tdSameHeight', function () {
	return {
		restrict: 'A',
		scope: true,
		//transclude: true,
		controller: function ($scope, $timeout, $element, $window) {
			var setHAuto = function () {
				var allElems = $element.find('div');
				angular.forEach(allElems, (el, i) => {
					if (i%2 !== 0)
					el.style.setProperty('height', 'auto');
				});
			};
			var setH = function () {
				var allElems = $element.find('div'),
					maxH = 0;
				angular.forEach(allElems, (el, i) => {
					if (i%2 !== 0) {
						if (maxH < el.offsetHeight) {
							maxH = el.offsetHeight;
						}
					}
				});
				angular.forEach(allElems, (el, i) => {
					if (i%2 !== 0)
					el.style.setProperty('height', maxH + 'px');
				});
			};
			$timeout(() => {
				setH();
			}, 100);
			$scope.width = $window.innerWidth;
			angular.element($window).bind('resize', function(){
				setHAuto();
				setH();
			});
			$scope.$on('langEvt', function () {
				$timeout(function() {
					setHAuto();
					setH();
				}, 10);
			});
		}
	};
})
.component('app', hello)
.component('test01', test01)
.component('test02', test02);
