from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.forms import model_to_dict
from crum import get_current_request

# Create your models here.

class Usuario(AbstractUser):
    

    def toJSON(self):
        item = model_to_dict(self, exclude['user_permissions', 'last_login'])
        if self.last_login:
            item['last_login'] = self.last_login.strftime('%Y-%m-%d')
        item['date_joined'] = self.date_joined.strftime('%Y-%m-%d')
        item['groups'] = self.groups.all()

        return item
        

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.set_password(self.password)
        else:
            usuario = Usuario.objects.get(pk=self.pk)
            if usuario.password != self.password:
                self.set_password(self.password)
        super().save(*args, **kwargs)

    def get_group_session(self):
        try:
            request = get_current_request()
            groups = self.groups.all()
            if groups.exists():
                if 'group' not in request.session:
                    request.session['group'] = groups[0]
        except:
            pass


# class PacienteUser(AbstractUser):
#     nro_documento = models.CharField(max_length=150, verbose_name='Número del documento', unique=True)
#     genero = models.CharField(max_length=150, verbose_name='Genero')
#     contagiado = models.BooleanField(max_length=150, verbose_name='Contagiado')

#     def toJSON(self):
#         item = model_to_dict(self, exclude['password', 'groups', 'user_permissions', 'last_login'])
#         if self.last_login:
#             item['last_login'] = self.last_login.strftime('%Y-%m-%d')
#         item['date_joined'] = self.date_joined.strftime('%Y-%m-%d')

#         return item

#     def save(self, *args, **kwargs):
#         if self.pk is None:
#             self.set_password(self.password)
#         super().save(*args, **kwargs)


# class DoctorUser(AbstractUser):
#     nro_documento = models.CharField(max_length=150, verbose_name='Número del documento', unique=True)
#     genero = models.CharField(max_length=150, verbose_name='Genero')
#     especialidad = models.CharField(max_length=150, verbose_name='Especialidad')

#     def toJSON(self):
#         item = model_to_dict(self, exclude['password', 'groups', 'user_permissions', 'last_login'])
#         if self.last_login:
#             item['last_login'] = self.last_login.strftime('%Y-%m-%d')
#         item['date_joined'] = self.date_joined.strftime('%Y-%m-%d')

#         return item

#     def save(self, *args, **kwargs):
#         if self.pk is None:
#             self.set_password(self.password)
#         super().save(*args, **kwargs)