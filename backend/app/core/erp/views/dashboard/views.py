from datetime import datetime

from django.db.models import Sum
from django.db.models.functions import Coalesce
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.utils.decorators import method_decorator

class DashboardView(TemplateView):
    template_name = 'dashboard.html'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    
    def get(self, request, *args, **kwargs):
        request.user.get_group_session()
        return super().get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Covid Diejinueve'
        context['panel'] = 'Panel de administrador'
        return context