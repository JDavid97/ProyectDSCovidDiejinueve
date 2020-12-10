from django.shortcuts import render
from django.views.generic import TemplateView
#from django.http import HttpResponse

# Create your views here.
class IndexView(TemplateView):
    template_name = 'index.html'

#def IndexView(TemplateView):
    # template_name = 'index.html'
 #    return HttpResponse("Hello, world. You're at the polls index.")