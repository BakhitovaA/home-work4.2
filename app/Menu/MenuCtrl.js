'use strict';

angular
    .module('myApp')
    .controller('MenuCtrl', function() {
        var vm = this;
        vm.menu = [
            {name: 'Список', link: 'list'},
            {name: 'Добавить нового', link: 'createNewPokemon'},
            {name: 'Личный кабинет', link: 'account'}];
    });

