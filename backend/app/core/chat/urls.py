from django.urls import path
from core.chat.views import ChatView, room

app_name = 'chat'

urlpatterns = [
    path('sala/', ChatView, name='chat_view'),    
    path('<str:room_name>/', room, name='room')
]