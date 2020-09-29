from django.urls import path
from core.erp.views.paciente.views import *
from core.erp.views.doctor.views import *

app_name = 'erp'

urlpatterns = [
    path('paciente/lista', PacienteListView.as_view(), name='paciente_listar'),
    path('paciente/lista2', lista_paciente, name='paciente_listar2'),
    path('paciente/crear', PacienteCrearView.as_view(), name='paciente_crear'),
    path('doctor/lista', DoctorListView.as_view(), name='doctor_listar'),
    path('doctor/crear', DoctorCrearView.as_view(), name='doctor_crear'),
]