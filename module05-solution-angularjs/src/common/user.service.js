(function () {
'use strict';

angular.module('common')
.service('UserService', UserService);

function UserService() {
    var service = this;
    service.UserService = NaN;

    service.getUserInfo = function () {
        return service.userInfoStorage;
    };

    service.saveUserInfo = function(userInfo) {
        service.userInfoStorage = userInfo;
    };
}
})();