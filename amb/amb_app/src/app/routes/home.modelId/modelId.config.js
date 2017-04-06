import('./modelId.scss');
import ModelIdController from './modelId.controller';

function ModelIdConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home.modelId', {
            url: 'models/:modelId/',
            template: require('./modelId.html'),
            controller: ModelIdController,
            controllerAs: 'ctrl_modelId'
        })
}
