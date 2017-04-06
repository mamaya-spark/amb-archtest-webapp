import ModelIdConfig from './modelId.config';

let ModelIdModule = angular.module(
    'route.home.modelId', [ ]
)

ModelIdModule
    .config(ModelIdConfig);

export default ModelIdModule;
