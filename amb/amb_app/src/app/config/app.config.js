import csrfInterceptor from '../interceptors/csrf.interceptor';
import jwtInterceptor from '../interceptors/jwt.interceptor';

function AppConfig($httpProvider, $stateProvider) {
    'ngInject';

    $httpProvider.interceptors.push(csrfInterceptor);
    $httpProvider.interceptors.push(jwtInterceptor);
}

export default AppConfig;
