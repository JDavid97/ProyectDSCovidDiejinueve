from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, FormView, View
from django.utils.decorators import method_decorator

from django.shortcuts import render
from core.erp.mixins import ValidatePermissionRequiredMixin
from core.usuario.forms import UsuarioForm
from core.usuario.models import Usuario

import os
from django.conf import settings
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
from django.contrib.staticfiles import finders

# Create your views here.

class UsuarioListarView(LoginRequiredMixin, ListView):
    model = Usuario    
    # fields = 'first_name', 'last_name', 'email', 'username', 'password', 'groups'
    template_name = 'usuario/listarU.html'
    # permission_required = 'usuario.view_usuario'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'searchdata':
                data = []
                for i in Usuario.objects.all():
                    data.append(i.toJSON())
            else:
                data['error'] = 'Ha ocurrido un error'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data, safe=False)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado de Usuarios'
        context['url_crear'] = reverse_lazy('usuario:usuario_crear')
        context['url_listar'] = reverse_lazy('usuario:usuario_listar')
        
        # context['entity'] = 'Usuarios'
        return context

class UsuarioCrearView(CreateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/crearU.html'
    success_url = reverse_lazy('login')
    permission_required = 'usuario.add_usuario'


    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Crear cuenta'
        context['cancelarcrearusuario'] = reverse_lazy('login')
        context['usuario_registro'] = reverse_lazy('usuario_registro')
        # context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        
        # context['url_listar'] = self.success_url
        context['action'] = 'crear'
        
        #context['object_list'] = Administrador.objects.all()
        return context

class UsuarioCrearView2(CreateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/crearU2.html'
    success_url = reverse_lazy('usuario:usuario_listar')
    permission_required = 'usuario.add_usuario'

    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    # def post(self, request, *args, **kwargs):
    #     data = {}
    #     try:
    #         action = request.POST['action']
    #         if action == 'crear':
    #             form = self.get_form()
    #             data = form.save()
    #         else:
    #             data['error'] = 'No ha ingresado a ninguna opción'
    #     except Exception as e:
    #         data['error'] = str(e)
    #     return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Crear usuario'      
        context['cancelarcrearusuario2'] = reverse_lazy('usuario:usuario_listar')
        context['url_crear'] = reverse_lazy('usuario:usuario_crear2')
        context['url_listar'] = reverse_lazy('usuario:usuario_listar')
        context['action'] = 'crear'
        
        #context['object_list'] = Administrador.objects.all()
        return context


class UsuarioEditarView(LoginRequiredMixin, UpdateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/crearU2.html'
    success_url = reverse_lazy('usuario:usuario_listar')
    permission_required = 'usuario.change_usuario'
    url_redirect = success_url

    def dispatch(self, request, *args, **kwargs):
        self.object = self.get_object()
        return super().dispatch(request, *args, **kwargs)

    # def post(self, request, *args, **kwargs):
    #     data = {}
    #     try:
    #         action = request.POST['action']
    #         if action == 'editar':
    #             form = self.get_form()
    #             data = form.save()
    #         else:
    #             data['error'] = 'No ha ingresado a ninguna opción'
    #     except Exception as e:
    #         data['error'] = str(e)
    #     return JsonResponse(data) 

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Editar usuario'
        context['cancelarcrearusuario2'] = reverse_lazy('usuario:usuario_listar')        
        # context['paciente_slidebar'] = reverse_lazy('erp:paciente_listar')
        
        # context['url_listar'] = self.success_url
        context['action'] = 'editar'
        
        #context['object_list'] = Administrador.objects.all()
        return context

class UsuarioDeleteView(DeleteView):

    model = Usuario
    template_name = 'usuario/borrarU.html'
    permission_required = 'usuario.delete_usuario'
    success_url = reverse_lazy('usuario:usuario_listar')

    # AJAX
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        self.object = self.get_object()
        return super().dispatch(request, *args, **kwargs)

      

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Eliminar usuario'    
        context['paciente_slidebar'] = reverse_lazy('usuario:usuario_listar')
        context['cancelarcrearusuario'] = reverse_lazy('usuario:usuario_listar')

        return context

class UsuarioGrupo(LoginRequiredMixin, View):

    def get(self, request, *args, **kwargs):
        try:
            print(self.kwargs)
            request.session['group'] = Group.objects.get(pk=self.kwargs['pk'])
        except:
            pass
        return HttpResponseRedirect(reverse_lazy('erp:dashboard'))

class UsuarioInformesPdf(ListView):
    model = Usuario    
    # fields = 'first_name', 'last_name', 'email', 'username', 'password', 'groups'
    template_name = 'usuario/informe.html'
    # permission_required = 'usuario.view_usuario'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'searchdata':
                data = []
                for i in Usuario.objects.all():
                    data.append(i.toJSON())
            else:
                data['error'] = 'Ha ocurrido un error'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data, safe=False)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Informe de usuarios'
        context['url_listar'] = reverse_lazy('usuario:usuario_listar')
        
        # context['entity'] = 'Usuarios'
        return context


class UsuarioPdfView(View):
    def get(self, request, *args, **kwargs):
        try:
            template = get_template('usuario/lista_pdf.html')
            context = {
                'usuario': Usuario.objects.all(),
                'comp': {'name': 'COVID DIEJINUEVE',
                        'ruc': 'Lista de usuarios',
                        'address': 'Cali, Colombia'}
                }
            html = template.render(context)
            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="Informe.pdf"'

            pisa_status = pisa.CreatePDF(
                html, dest=response)
            # if error then show some funy view
            if pisa_status.err:
                return HttpResponse('We had some errors <pre>' + html + '</pre>')
            return response
        except:
            pass
        return HttpResponseRedirect(reverse_lazy('usuario:usuario_listar'))