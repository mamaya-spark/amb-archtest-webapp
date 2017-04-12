import './models.scss';
import ModelsController from './models.controller';

function ModelsConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home.models', {
            url: 'models',
            template: require('./models.html'),
            controller: ModelsController,
            controllerAs: 'ctrl_models'
        });
}

export default ModelsConfig;
