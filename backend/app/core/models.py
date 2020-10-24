from django.conf import settings
from django.db import models

class BaseModel(models.Model):
    usuario_creacion = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='usuario_creacion',
                                      null=True, blank=True)
    date_creacion = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    date_actualizacion = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='usuario_actualizacion',
                                      null=True, blank=True)
    usuario_actualizacion = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        abstract = True