
from django.db import models
from datetime import datetime

from django.forms import model_to_dict
from core.models import BaseModel

from crum import get_current_request, get_current_user
# from core.usuario.models import Usuario

          
class Administrador(models.Model):
    nombres = models.CharField(max_length=150, verbose_name='Nombres')
    apellidos = models.CharField(max_length=150, verbose_name='Apellidos')
    nro_documento = models.CharField(max_length=150, verbose_name='Número del documento', unique=True)
    celular = models.CharField(max_length=150, verbose_name='Celular')
    fecha_registro = models.DateTimeField(max_length=150, verbose_name='Fecha de registro', null=True)
    genero = models.CharField(max_length=150, verbose_name='Genero')

    def __str__(self):
        return self.nombres

    class Meta:
            verbose_name = 'Administrador'
            verbose_name_plural = 'Administradores'
            db_table = 'administrador'
            ordering = ['id']


class Paciente(BaseModel):
    nombres = models.CharField(max_length=150, verbose_name='Nombres')
    apellidos = models.CharField(max_length=150, verbose_name='Apellidos')
    nro_documento = models.CharField(max_length=150, verbose_name='Número del documento', unique=True)
    celular = models.CharField(max_length=150, verbose_name='Celular')
    fecha_registro = models.DateTimeField(max_length=150, verbose_name='Fecha de registro')
    genero = models.CharField(max_length=150, verbose_name='Genero')
    contagiado = models.BooleanField(max_length=150, verbose_name='Contagiado')

    def __str__(self):
        return self.nombres

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        usuario = get_current_user()
        if usuario is not None:
            if not usuario.pk:
                self.usuario_creacion = usuario
            else:
                self.usuario_actualizacion = usuario
        super(Paciente, self).save()

    def toJSON(self):
        item = model_to_dict(self, exclude=['date_actualizacion', 'date_creacion', 'usuario_actualizacion', 'usuario_creacion'])
        # item['fecha_registro'] = self.date_joined.strftime('%Y-%m-%d')
        return item

    class Meta:
            verbose_name = 'Paciente'
            verbose_name_plural = 'Pacientes'
            db_table = 'paciente'
            ordering = ['id']

class Doctor(models.Model):
    nombres = models.CharField(max_length=150, verbose_name='Nombres')
    apellidos = models.CharField(max_length=150, verbose_name='Apellidos')
    nro_documento = models.CharField(max_length=150, verbose_name='Número del documento', unique=True)
    nro_celular = models.CharField(max_length=150, verbose_name='Celular')
    genero = models.CharField(max_length=150, verbose_name='Genero')
    especialidad = models.CharField(max_length=150, verbose_name='Especialidad')

    def __str__(self):
        return self.nombres

    class Meta:
            verbose_name = 'Doctor'
            verbose_name_plural = 'Doctores'
            db_table = 'doctor'
            ordering = ['id']


class Localizacion(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    fecha_localizacion = models.DateTimeField(max_length=30, verbose_name='Fecha de localización')
    hora_localizacion = models.TimeField(max_length=30, verbose_name='Hora de localización')

    def __str__(self):
        return str(self.id)

    class Meta:
            verbose_name = 'Localizacion'
            db_table = 'localizacion'
            ordering = ['id']

class Informe(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    fecha_informe = models.DateTimeField(max_length=30, verbose_name='Fecha del informe')
    hora_informe = models.TimeField(max_length=30, verbose_name='Hora del informe')

    def __str__(self):
        return str(self.id)

    class Meta:
            verbose_name = 'Informe'
            db_table = 'informe'
            ordering = ['id']

class Chat(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    fecha_chat = models.DateTimeField(max_length=30, verbose_name='Fecha del chat')
    hora_chat = models.TimeField(max_length=30, verbose_name='Hora del chat')

    def __str__(self):
        return str(self.id)

    class Meta:
            verbose_name = 'Chat'
            db_table = 'chat'
            ordering = ['id']
