//* Import Routes
import './home';
import './home.models';
//import './home.modelId';

let RoutesModule = angular.module(
    'app.routes', [
        'route.home',
        'route.home.models',
        //'route.home.modelId'
    ]
);

export default RoutesModule;
