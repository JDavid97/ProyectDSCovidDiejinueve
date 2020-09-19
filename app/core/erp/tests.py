from django.test import TestCase
from app.wsgi import *
from core.erp.models import Administrador


#OPERACIONES CRUD
#Listar

# #select * from Tabla
# query = Type.objects.all()
# print(query)
#
# # Insercion
# t = Type()
# t.nombre = 'Enfermero'
# t.save()

# #Edicion
# t = Type.objects.get(id=12)
# print(t.nombre)

#Eliminacion
#t = Type.objects.get(id=1)
#t.delete()

#-----------------------------------

#obj = Type.objects.filter(nombre__icontains='E')
#print(obj)
