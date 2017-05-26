'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', function() {

        var vm = this;
        vm.accountData = {};
    
        vm.saveAccountData = function(account) {
            console.log(account);
            vm.accountData = {
                name: account.name,
                email: account.email,
                phone: account.phone
            };
            vm.myAccountForm.$setPristine();
        };
    });
