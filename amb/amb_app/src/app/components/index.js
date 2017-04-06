import AppConstants from '../config/app.constants';
import ButtonComponent from './button';
import CounterComponent from './counter';

let ComponentsModule = angular.module(
    `${AppConstants.appName}.components`, [ ]
);

ComponentsModule
    .component('button', ButtonComponent)
    .component('counter', CounterComponent);

export default ComponentsModule;
