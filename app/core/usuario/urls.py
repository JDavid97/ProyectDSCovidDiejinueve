from django.urls import path
from core.usuario.views import *

app_name = 'usuario'

urlpatterns = [
    # path('registrarse/', UsuarioCrearView.as_view(), name='usuario_crear'),
    path('lista/', UsuarioListarView.as_view(), name='usuario_listar'),
    path('registro/', UsuarioCrearView.as_view(), name='usuario_registro2'),
    path('crear/', UsuarioCrearView2.as_view(), name='usuario_crear'),
    path('editar/<int:pk>/', UsuarioEditarView.as_view(), name='usuario_editar'),
    path('eliminar/<int:pk>/', UsuarioDeleteView.as_view(), name='usuario_eliminar'),
]