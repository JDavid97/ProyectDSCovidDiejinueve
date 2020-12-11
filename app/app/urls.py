"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from core.homepage.views import IndexView
from core.login.views import *
from core.usuario.views import *

urlpatterns = [
    path('', IndexView.as_view(), name = 'index'),
    path('login/', LoginFormView.as_view(), name = 'login'),
    path('login/logout/', LogoutView.as_view(next_page='login'), name = 'logout'),
    path('admin/', admin.site.urls),
    path('cvd/', include('core.erp.urls')),
    path('usuario/', include('core.usuario.urls')),
    path('chat/', include('core.chat.urls')),
    path('usuario/registro/', UsuarioCrearView.as_view(), name = 'usuario_crear')
]
