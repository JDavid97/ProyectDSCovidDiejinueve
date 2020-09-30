import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

POSTGRESQL = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'coviddiejinueve',
        'USER': 'postgres',
        'PASSWORD': '12341234',
        'HOST': 'localhost',
        'PORT': '',
    }
}