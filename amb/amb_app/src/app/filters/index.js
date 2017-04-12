import objectFilter from './object.filter';
import searchFilter from './search.filter';

let FiltersModule = angular.module(
    'app.filters', [ ]
);

FiltersModule
    .filter('objectFilter', objectFilter)
    .filter('searchFilter', searchFilter);

export default FiltersModule;
