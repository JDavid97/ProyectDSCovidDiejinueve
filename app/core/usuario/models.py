from django.contrib.auth.models import AbstractUser
from django.db import models
from django.forms import model_to_dict

from config.settings import MEDIA_URL, STATIC_URL


class Usuario(AbstractUser):    

    def toJSON(self):
        item = model_to_dict(self, exclude=['password', 'groups', 'user_permissions', 'last_login'])
        if self.last_login:
            item['last_login'] = self.last_login.strftime('%Y-%m-%d')
        item['date_joined'] = self.date_joined.strftime('%Y-%m-%d')
        # item['image'] = self.get_image()
        return item

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.set_password(self.password)
        super().save(*args, **kwargs)
