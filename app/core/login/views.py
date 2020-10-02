from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic import FormView
# Create your views here.

class LoginFormView(LoginView):
    template_name = 'login.html'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('erp:paciente_listar')
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Iniciar sesión'

        return context
