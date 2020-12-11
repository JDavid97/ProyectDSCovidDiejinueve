from django.shortcuts import render
from django.views.generic import TemplateView
<<<<<<< HEAD
=======
#from django.http import HttpResponse
>>>>>>> jdavid97

# Create your views here.
class IndexView(TemplateView):
    template_name = 'index.html'

<<<<<<< HEAD
=======
#def IndexView(TemplateView):
    # template_name = 'index.html'
 #    return HttpResponse("Hello, world. You're at the polls index.")
>>>>>>> jdavid97
