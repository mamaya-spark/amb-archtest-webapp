import AppConstants from '../config/app.constants';
import objectFilter from './object.filter';
import searchFilter from './search.filter';

let FiltersModule = angular.module(
    `${AppConstants.appName}.filters`, [ ]
);

FiltersModule
    .filter('objectFilter', objectFilter)
    .filter('searchFilter', searchFilter);

export default FiltersModule;
