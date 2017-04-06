import AppConstants from '../config/app.constants';

//* The InterceptorsModule holds all the interceptors of the app
let InterceptorsModule = angular.module(
    `${AppConstants.appName}.interceptors`, [ ]
);

//* Import interceptors
import csrfInterceptor from './csrf.interceptor';
import jwtInterceptor from './jwt.interceptor';

//* Attach interceptors
InterceptorsModule
    .factory('csrfInterceptor', csrfInterceptor);
    .factory('jwtInterceptor', jwtInterceptor)

export default InterceptorsModule;
