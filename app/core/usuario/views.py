from django.shortcuts import render
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView, CreateView

from core.erp.mixins import ValidatePermissionRequiredMixin
from core.usuario.forms import UsuarioForm
from core.usuario.models import Usuario

# Create your views here.

class UsuarioCrearView(LoginRequiredMixin, ValidatePermissionRequiredMixin, CreateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/crearU.html'
    success_url = reverse_lazy('usuario:paciente_listar')
    # permission_required = 'user.add_user'
    url_redirect = success_url

    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'add':
                form = self.get_form()
                data = form.save()
            else:
                data['error'] = 'No ha ingresado a ninguna opción'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Creación de un Usuario'
        # context['entity'] = 'Usuarios'
        context['list_url'] = self.success_url
        context['action'] = 'add'
        return context
