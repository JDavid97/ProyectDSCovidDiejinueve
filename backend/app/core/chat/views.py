from django.shortcuts import render
from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from django.views.generic import View
# Create your views here.


def ChatView(request):
    return render(request, 'chat.html')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sala de chat'
        return context


def room(request, room_name):
    return render(request, 'room.html', {
        'room_name': room_name
    })

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Chat'
        return context
