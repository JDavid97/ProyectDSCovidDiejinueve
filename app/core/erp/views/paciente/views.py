from django.shortcuts import render
from django.views.generic import ListView
from core.erp.models import Paciente, Administrador


def lista_paciente(request):
    data = {
        'title': 'Listado de pacientes',
        'pacientes': Paciente.objects.all()
    }
    return render(request, 'paciente/lista.html', data)


class PacienteListView(ListView):
    model = Paciente
    template_name = 'paciente/lista.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado de pacientes'
        #context['object_list'] = Administrador.objects.all()
        return context

