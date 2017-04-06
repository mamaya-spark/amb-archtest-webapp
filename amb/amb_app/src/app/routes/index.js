import AppConstants from '../config/app.constants';

//* Import Routes
import './home';
import './home.modelId';

let RoutesModule = angular.module(
    `${AppConstants.appName}.routes`, [
        'route.home',
        'route.home.models',
        'route.home.modelId'
    ]
);

export default RoutesModule;
