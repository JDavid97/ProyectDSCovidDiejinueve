from django.urls import path
from core.usuario.views import *

app_name = 'usuario'

urlpatterns = [
    # path('registrarse/', UsuarioCrearView.as_view(), name='usuario_crear'),
    path('lista/', UsuarioListarView.as_view(), name='usuario_listar'),
]