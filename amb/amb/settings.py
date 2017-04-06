"""
Using Django 1.10.5.
"""

import os

BASE_DIR       = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DJANGO_ENV     = os.environ['DJANGO_ENV']
SECRET_KEY     = os.environ['DJANGO_SECRET_KEY']
AMB_IP         = os.environ['AMB_IP']
AMB_BACKEND_IP = os.environ['AMB_BACKEND_IP']
AMB_PSQL_NAME  = os.environ['AMB_PSQL_NAME']
AMB_PSQL_HOST  = os.environ['AMB_PSQL_HOST']
AMB_PSQL_USER  = os.environ['AMB_PSQL_USER']
AMB_PSQL_PASS  = os.environ['AMB_PSQL_PASS']
AMB_PSQL_PORT  = os.environ['AMB_PSQL_PORT']

if DJANGO_ENV == 'production':
    DEBUG = False
else :
    DEBUG = True

ALLOWED_HOSTS = [
    AMB_IP,
    AMB_BACKEND_IP
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'amb_app'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'amb.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'amb.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': AMB_PSQL_NAME,
        'USER': AMB_PSQL_USER,
        'PASSWORD': AMB_PSQL_PASS,
        'HOST': AMB_PSQL_HOST,
        'PORT': AMB_PSQL_PORT
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_DIR = os.path.join(BASE_DIR, 'static')

STATICFILES_DIRS = [
    STATIC_DIR,
]

STATIC_URL = '/static/'
