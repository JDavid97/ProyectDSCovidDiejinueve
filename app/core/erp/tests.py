#from app.wsgi import *
from core.erp.models import *

data = ['ererer']

for i in data:
    amd = Administrador(nombres=i)
    amd.save()
    print('Guardado registro N°{}'.format(amd.id))


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
