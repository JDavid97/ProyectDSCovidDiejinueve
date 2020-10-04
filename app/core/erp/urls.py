from django.urls import path
from core.erp.views.paciente.views import *
from core.erp.views.doctor.views import *
from core.erp.views.dashboard.views import *

app_name = 'erp'

urlpatterns = [
    path('paciente/lista/', PacienteListView.as_view(), name='paciente_listar'),
    path('paciente/crear/', PacienteCrearView.as_view(), name='paciente_crear'),
    path('paciente/editar/<int:pk>/', PacienteUpdateView.as_view(), name='paciente_editar'),
    path('paciente/borrar/<int:pk>/', PacienteDeleteView.as_view(), name='paciente_borrar'),
    path('paciente/formulario/', PacienteFormView.as_view(), name='paciente_form'),
    
    path('doctor/lista/', DoctorListView.as_view(), name='doctor_listar'),
    path('doctor/crear/', DoctorCrearView.as_view(), name='doctor_crear'),
    path('doctor/editar/<int:pk>/', DoctorEditView.as_view(), name='doctor_editar'),
    path('doctor/borrar/<int:pk>/', DoctorDeleteView.as_view(), name='doctor_borrar'),
    
    #Home
    path('inicio/', DashboardView.as_view(), name='dashboard'),
]