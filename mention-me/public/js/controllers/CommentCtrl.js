angular.module('CommentCtrl', []).controller('CommentController', function ($scope, $q, $timeout) {

	$scope.isLoading = false;

	function push() {
		$scope.commentList.push(
			{
				user: 'John Papa',
				comment: 'Lorem ipsum'
			},
			{
				user: 'John Papa',
				comment: 'Lorem ipsum'

			},
			{
				user: 'John Papa',
				comment: 'Lorem ipsum'

			},
			{
				user: 'John Papa',
				comment: 'Lorem ipsum'

			},
			{
				user: 'John Papa',
				comment: 'Lorem ipsum'

			});
	}

	$scope.loadOlder = function () {
		var deferred = $q.defer();
		if (!$scope.isLoading) {
			$scope.isLoading = true
			$timeout(function () {
				$scope.commentList.unshift.apply($scope.commentList, push());
				$scope.isLoading = false;
				deferred.resolve();
			}, 1000);
		}
		return deferred.promise;
	}

	$scope.commentList = [
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'
		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'
		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'
		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'
		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'
		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'

		},
		{
			user: 'John Papa',
			comment: 'Lorem ipsum'
		}
	];

	// Manda o scroll da div para o final ao carregar os dados
	var divComentarios = document.getElementById('com');
	angular.element(divComentarios).scrollTop = angular.element(divComentarios).scrollHeight;

	$scope.randomMinutes = function() {
		return Math.floor((Math.random() * 60) + 1); 
	}

});

// Esta diretiva não irá funcionar totalmente, pois ao carregar os dados, o scroll sobe um pouco, mesmo sendo setado para o final
angular.module('CommentCtrl').directive('ngScrollBottom', ['$timeout', function ($timeout) {
	return {
		scope: {
			ngScrollBottom: "="
		},
		link: function ($scope, $element) {
			$scope.$watchCollection('ngScrollBottom', function (newValue) {
				console.log($element);
				if (newValue) {
					$timeout(function () {
						$element[0].scrollTop = $element[0].scrollHeight
					}, 5000);
				}
			});
		}
	}
}]);