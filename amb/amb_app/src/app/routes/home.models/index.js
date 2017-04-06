import ModelsConfig from './models.config';

let ModelsModule = angular.module(
    'route.home.models', [ ]
)

ModelsModule
    .config(ModelsConfig)

export default ModelsModule;
