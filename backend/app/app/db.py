import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

POSTGRESQL = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'qwdyebay',
        'USER': 'qwdyebay',
        'PASSWORD': 'MlldGlVRZHaKxl3OXt696Ee1BZzOyXlh',
        'HOST': 'lallah.db.elephantsql.com',
        'PORT': '5432',
    }
}