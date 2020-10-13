from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, FormView
from django.utils.decorators import method_decorator


from core.erp.forms import PacienteForm
from core.erp.models import Paciente, Administrador
from core.erp.mixins import IsSuperuserMixin, ValidatePermissionRequiredMixin
from core.usuario.models import Usuario



class PacienteListView(LoginRequiredMixin, ValidatePermissionRequiredMixin, ListView):
    # permisio
    model = Usuario
    template_name = 'paciente/lista.html'
    permission_required = 'view_usuario'

    @method_decorator(csrf_exempt)
    # @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)   

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == ['searchdata']:
                data = []
                for i in Paciente.objects.all():
                    
                    data.append(i.toJSON())
            else:
                data['error'] = 'Ha ocurrido un error'
        except Exception as e:
            data['error'] = str(e)
        
        return JsonResponse(data, safe=False)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado de pacientes'
        context['url_crear'] = reverse_lazy('erp:paciente_crear')
        context['url_listar'] = reverse_lazy('erp:paciente_listar')
        context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        #context['object_list'] = Administrador.objects.all()
        return context


class PacienteCrearView(LoginRequiredMixin, ValidatePermissionRequiredMixin, CreateView):
    model = Paciente
    form_class = PacienteForm
    template_name = 'paciente/crearP.html'
    success_url = reverse_lazy('erp:paciente_listar')
    permission_required = 'add_usuario'


    #--- AJAX -----
    # def post(self, request, *args, **kwargs):
    #     data = {}

    #     try:
    #         action = request.POST['action']
    #         if action == 'add':
    #             form = self.get_form()
    #             if form.is_valid():
    #                 form.save()
    #             else:
    #                 data['error'] = form.errors
    #         else:
    #             data['error'] = 'No ha ingresado ninguna opcioón'
    #         data = Paciente.objects.get(pk=request.POST['id']).toJSON
    #     except Exception as e:
    #         data['error'] = str(e)
        
    #     return JsonResponse(data)
    #--- AJAX -----

    # def post (self, request, *args, **kwargs):
    #     form = PacienteForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         return HttpResponseRedirect(self.success_url)
    #     self.object = None
    #     context = self.get_context_data(**kwargs)
    #     context['form'] = form
    #     return render(request, self.template_name, context)

    # @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)   

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Registrar paciente'
        context['cancelarcrearpaciente'] = reverse_lazy('erp:paciente_listar')
        context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        context['action'] = 'crear'
        
        #context['object_list'] = Administrador.objects.all()
        return context


class PacienteUpdateView(LoginRequiredMixin, ValidatePermissionRequiredMixin, UpdateView):
    
    model = Paciente
    form_class = PacienteForm
    template_name = 'paciente/crearP.html'
    success_url = reverse_lazy('erp:paciente_listar')
    permission_required = 'change_usuario'

    # def dispatch(self, request, *args, **kwargs):
    #     self.object = self.get_object()
    #     return super().dispatch(request, *args, **kwargs)

    # def post(self, request, *args, **kwargs):
    #     data = {}

    #     try:
    #         data = Paciente.objects.get(pk=request.POST['id']).toJSON
    #     except Exception as e:
    #         data['error'] = str(e)
        
    #     return JsonResponse(data)

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)  

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Editar paciente'
        context['cancelarcrearpaciente'] = reverse_lazy('erp:paciente_listar')
        context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        context['action'] = 'edit'
        
        #context['object_list'] = Administrador.objects.all()
        return context

class PacienteDeleteView(LoginRequiredMixin, ValidatePermissionRequiredMixin, DeleteView):

    model = Paciente
    template_name = 'paciente/borrarP.html'
    success_url = reverse_lazy('erp:paciente_listar')
    permission_required = 'delete_usuario'

    # AJAX
    # @method_decorator(csrf_exempt)
    # def dispatch(self, request, *args, **kwargs):
    #     self.object = self.get_object()
    #     return super().dispatch(request, *args, **kwargs)

    # def post(self, request, *args, **kwargs):
    #     data = {}
    #     try:
    #         self.object.delete()
    #     except Exception as e:
    #         data['error'] = str(e)
        
    #     return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Eliminar paciente'    
        context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        context['cancelarcrearpaciente'] = reverse_lazy('erp:paciente_listar')
        context['url_listar'] = reverse_lazy('erp:paciente_listar')

        return context


class PacienteFormView(FormView):
    form_class = PacienteForm
    template_name = 'paciente/crearP.html'
    success_url = reverse_lazy('erp:paciente_listar')

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)  

    def form_valid(self, form):
        return super().form_invalid(form)

    def form_invalid(self, form):
        return super().form_invalid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Formulario | Paciente'    
        context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        context['cancelarcrearpaciente'] = reverse_lazy('erp:paciente_listar')
        context['url_listar'] = reverse_lazy('erp:paciente_listar')
        context['action'] = 'crear'

        return context