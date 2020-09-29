from django.urls import path
from core.erp.views.paciente.views import *

app_name = 'erp'

urlpatterns = [
    path('paciente/lista', PacienteListView.as_view(), name='PacienteListView'),
]