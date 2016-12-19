angular.module('GeekCtrl', []).controller('GeekController', function ($scope) {

	$scope.tagline = 'The square root of life is pi!';

	$scope.simplePeoples = [{ first: 'bob', last: 'barker', id: 11123 }, { first: 'kenny', last: 'logins', id: '123ab-123' }, { first: 'kyle', last: 'corn', id: '123' }, { first: 'steve', last: 'rodriguez', id: 'hi' }, { first: 'steve', last: 'holt', id: '0-9' }, { first: 'megan', last: 'burgerpants', id: 'ab-' }];

	$scope.simplePeople = [{ label: 'Bruno' }, { label: 'Shablau' }, { label: 'Wilson vai' }, { label: 'John' }, { label: 'Lucas' }, { label: 'Adolfinho' }];

});