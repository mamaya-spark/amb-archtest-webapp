function jwtInterceptor(JWTService) {
    'ngInject';

    return {
        //* Send jwt as a Bearer token on every request
        request: function(config) {
            config.headers['Authorization'] = `Bearer ${JWTService.get()}`;
            return config;
        }
    }
}

export default jwtInterceptor;
