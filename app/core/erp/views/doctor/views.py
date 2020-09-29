from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views.generic import ListView, CreateView
from django.utils.decorators import method_decorator

from core.erp.forms import DoctorForm
from core.erp.models import Doctor


def lista_doctor(request):
    data = {
        'title': 'Listado de doctores',
        'doctores': Doctor.objects.all()
    }
    return render(request, 'doctor/listaD.html', data)


class DoctorListView(ListView):
    model = Doctor
    template_name = 'doctor/listaD.html'

    #@method_decorator(csrf_exempt)
    # def dispatch(self, request, *args, **kwargs):
    #     if request.method == 'GET':
    #         return redirect('erp:paciente_listar2')
    #     return super().dispatch(request, *args, **kwargs)   

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado de doctores'
        context['url_crear'] = reverse_lazy('erp:doctor_crear')
        context['doctor_slidebar'] = reverse_lazy('erp:doctor_listar')
        #context['object_list'] = Administrador.objects.all()
        return context

class DoctorCrearView(CreateView):
    model = Doctor
    form_class = DoctorForm
    template_name = 'doctor/crearD.html'
    success_url = reverse_lazy('erp:doctor_listar')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Registrar doctor'
        context['cancelarcreardoctor'] = reverse_lazy('erp:doctor_listar')
        context['doctor_slidebar'] = HttpResponseRedirect('doctor/listaD.html')
        #context['object_list'] = Administrador.objects.all()
        return context
