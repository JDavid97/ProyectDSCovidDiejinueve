from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from datetime import datetime
from django.forms import model_to_dict
from crum import get_current_request
# from core.erp.models import TipoIdentificacion, Genero

# Create your models here.

class TipoIdentificacion(models.Model):
    dscrpcn_tpo_idntfcn = models.CharField(max_length=150, verbose_name='Tipo de identificación')

    def __str__(self):
        return self.dscrpcn_tpo_idntfcn

class Genero(models.Model):
    dscrpcn_gnro = models.CharField(max_length=50, verbose_name='Genero')

    def __str__(self):
        return self.dscrpcn_gnro


class Usuario(AbstractUser):
    nmro_unco_idntfccn_tpo_idntfccn = models.ForeignKey(TipoIdentificacion, on_delete=models.CASCADE, verbose_name='Tipo de identificación', null=True)
    nmro_idntfccn = models.CharField(max_length=50, verbose_name='Nro Identificación', null=True)
    tlfno = models.CharField(max_length=50, verbose_name='Telefono', null=True)
    nmro_unco_idntfccn_gnro = models.ForeignKey(Genero, on_delete=models.CASCADE, verbose_name='Genero', null=True)
    lngtd = models.CharField(max_length=50, verbose_name='Longitud', null=True)
    lttd = models.CharField(max_length=50, verbose_name='Latitud', null=True)
    picture = models.CharField(max_length=255, verbose_name='Imagen de usuario', null = True)
    role = models.CharField(max_length=50, verbose_name='Rol de usuario', null = True)
    genero = models.CharField(max_length=50, verbose_name='Genero de usuario', null = True)





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

class Departamento(models.Model):
    nmbre_dprtmnto = models.CharField(max_length=150, verbose_name='Departamento')

    def __str__(self):
        return self.nmbre_dprtmnto

    class Meta:
            verbose_name = 'Departamento'
            verbose_name_plural = 'Departamentos'  


class Ciudad(models.Model):
    cnsctvo_dprtmnto = models.ForeignKey(Departamento, on_delete=models.CASCADE)
    nmbre_cdd = models.CharField(max_length=50, verbose_name='Ciudad')

    def __str__(self):
        return self.nmbre_dprtmnto

    class Meta:
            verbose_name = 'Ciudad'
            verbose_name_plural = 'Ciudades'          

        


class HistorialUbicaciones(models.Model):
    nmro_unco_idntfccn_user = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    hra = models.DateTimeField(max_length=150)
    lngtd = models.IntegerField()
    lttd = models.IntegerField()

    def __str__(self):
        return self.dscrpcn_tpo_idntfcn

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