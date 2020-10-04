from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, FormView
from django.utils.decorators import method_decorator

from django.shortcuts import render
from core.erp.mixins import ValidatePermissionRequiredMixin
from core.usuario.forms import UsuarioForm
from core.usuario.models import Usuario

# Create your views here.

class UsuarioListarView(LoginRequiredMixin, ValidatePermissionRequiredMixin, ListView):
    model = Usuario
    template_name = 'usuario/listarU.html'
    # permission_required = 'usuario.view_usuario'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado de Usuarios'
        # context['url_crear'] = reverse_lazy('user:user_create')
        context['url_listar'] = reverse_lazy('usuario:usuario_listar')
        # context['entity'] = 'Usuarios'
        return context

class UsuarioCrearView(CreateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/crearU.html'
    success_url = reverse_lazy('login')
    permission_required = 'usuario.add_usuario'
    # url_redirect = success_url

    #--- AJAX -----
    # def post(self, request, *args, **kwargs):
    #     data = {}

    #     try:
    #         action = request.POST['action']
    #         if action == 'crear':
    #             form = self.get_form()
    #             if form.is_valid():
    #                 form.save()
    #             else:
    #                 data['error'] = form.errors
    #         else:
    #             data['error'] = 'No ha ingresado ninguna opcioón'
    #         data = Usuario.objects.get(pk=request.POST['id']).toJSON           
    #     except Exception as e:
    #         data['errorasdasdasd'] = str(e)
        
    #     return JsonResponse(data)
    
    # def dispatch(self, request, *args, **kwargs):
    #     return super().dispatch(request, *args, **kwargs)   
    #--- AJAX -----

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Crear cuenta'
        context['cancelarcrearusuario'] = reverse_lazy('login')
        # context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        
        # context['url_listar'] = self.success_url
        context['action'] = 'crear'
        
        #context['object_list'] = Administrador.objects.all()
        return context
