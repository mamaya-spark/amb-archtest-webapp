//* Import app configs
import AppConstants from './config/app.constants';
import AppConfig from './config/app.config';
import AppRun from './config/app.run';

// //* Import app components
// import './interceptors';
// import './components';
// import './directives';
// import './services';
// import './filters';
//
// //* App dependencies
const requires = [
    'ui.router',
    'ngAnimate',
    'ngLodash',
    'nvd3',
    // `${AppConstants.appName}.interceptors`,
    // `${AppConstants.appName}.components`,
    // `${AppConstants.appName}.directives`,
    // `${AppConstants.appName}.services`,
    // `${AppConstants.appName}.filters`
];

//* Create application
angular
    .module(AppConstants.appName, requires)
    .constant('AppConstants', AppConstants)
    .config(AppConfig)
    .run(AppRun);

//* Bootstrap application
angular
    .bootstrap(document, [ AppConstants.appName ], { strictDi: true });

console.log(`Hello ${AppConstants.appName}!`);
