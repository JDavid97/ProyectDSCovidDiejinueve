from django.http import HttpResponse

#Vista 1 Prueba

def bienvenida(request):
    return HttpResponse("Covid Diejinueve")