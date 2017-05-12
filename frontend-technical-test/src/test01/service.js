// export const app = 'app';
// angular.module(app, []).factory('Test01Service', ($http, $q) => {
// 	var getData = function () {
// 		return 'test';
// 	};

//     return {
//     	getData () {
//     		this.getData();
//     	}
//     };
// });


//module App {
	// export Test01Service {
	//     public getData():String {
	//         return "Hello";
	//     }
	// }

	angular.module('app', []).factory('Test01Service', () => {
	    return 'test';
	});
//}

// export class Test01Service {
//     getData():String {
//         return "Hello";
//     }
// }


//   .factory('Test01Service', ($http, $q) => {
	// 	var getData = function () {
	// 		var deferred = $q.defer();
	// 		var url = './data.json';
	// 		$http.get(url, {async: false}).then(function onSuccess(response) {
		    //  var data = response.data;
		    //  var status = response.status;
		    //  var statusText = response.statusText;
		    //  var headers = response.headers;
		    //  var config = response.config;
	//			deferred.resolve(angular.fromJson(response.data));
	// 		}).catch(function onError (response) {
	//			deferred.reject(response.error);
	//		});
	// 		return deferred.promise;
	// 	};

//     return {
//     	getData () {
//     		this.getData();
//     	}
//     };
// })