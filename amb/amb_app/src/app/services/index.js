//* The ServicesModule holds all the services of the app
let ServicesModule = angular.module(
    'app.services', [ ]
);

//* Import services
import JWTService from './jwt.service';
import CSRFService from './csrf.service';

//* Attach services
ServicesModule
    .service('JWTService', JWTService)
    .service('CSRFService', CSRFService);

export default ServicesModule;
