from django.views.generic import TemplateView

class DashboardView(TemplateView):
    template_name = 'dashboard.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Covid Diejinueve'
        context['panel'] = 'Panel de administrador'
        return context