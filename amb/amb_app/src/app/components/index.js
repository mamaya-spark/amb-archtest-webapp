import ButtonComponent from './button';
import CounterComponent from './counter';

let ComponentsModule = angular.module(
    'app.components', [ ]
);

ComponentsModule
    .component('btn', ButtonComponent)
    .component('counter', CounterComponent);

export default ComponentsModule;
