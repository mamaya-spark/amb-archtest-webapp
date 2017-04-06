function AppConfig($httpProvider, csrfInterceptor, jwtInterceptor) {
    'ngInject';

    $httpProvider.interceptors.push('csrfInterceptor');
    $httpProvider.interceptors.push('jwtInterceptor');
}

export default AppConfig;