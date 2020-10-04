from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from core.usuario.models import Usuario

admin.site.register(Usuario, UserAdmin)
# admin.site.register(PacienteUser, UserAdmin)
# admin.site.register(DoctorUser, UserAdmin)
# Register your models here.
