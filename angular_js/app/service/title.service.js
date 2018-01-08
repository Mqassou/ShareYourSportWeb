'use strict';

angular.module('ShareYourSport')
.factory('Page', function () {
        var title = 'home';
        return {
            title: function () { return title; },
            setTitle: function (newTitle) { title = newTitle; }
        };
    });