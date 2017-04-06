function csrfInterceptor(CSRFService) {
    'ngInject';

    return {
        //* Send CSRF token on every request
        request: function(config) {
            config.headers['X-CSRFToken'] = CSRFService.get();
            return config;
        }
    }
}

export default csrfInterceptor;
