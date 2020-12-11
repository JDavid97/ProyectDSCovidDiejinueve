from core.usuario.models import Usuario
from rest_framework import serializers
from rest_framework.request import Request
from django.contrib.auth import authenticate
from knox.models import AuthToken


#Usuarios
class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Usuario
        fields =  '__all__'#('id', 'first_name', 'last_name', 'role', 'picture')#('id', 'username', 'first_name', 'last_name', 'email','is_staff','is_active','is_superuser')

#Usuarios
class UserPacienteSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='first_name')
    lastname = serializers.CharField(source='last_name')
    class Meta: 
        model= Usuario
        fields = ('id', 'name', 'lastname', 'role', 'picture', 'lttd', 'lngtd')

class UserAministradorSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='first_name')
    lastname = serializers.CharField(source='last_name')
    class Meta:
        model = Usuario
        fields = ('id', 'name', 'lastname', 'role', 'picture')

# def category_list(request):
#     if request.method == 'GET':
#         categories = Category.objects.all()
#         serializer = CategorySerializer(categories, many=True)
#         return Response(serializer.data)

#Usuarios
class UserDoctorSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='first_name')
    lastname = serializers.CharField(source='last_name')
    class Meta: 
        model= Usuario
        fields = ('id', 'name', 'lastname', 'role', 'picture')

#Usuarios
class UserLoginSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='first_name')
    lastname = serializers.CharField(source='last_name')
    class Meta: 
        model= Usuario
        fields = ('id', 'name', 'lastname', 'role', 'picture')
        last_name = serializers.CharField()

#Registro de usuarios
class RegisterSerializer(serializers.Serializer): 
    id              = serializers.ReadOnlyField()
    first_name      = serializers.CharField()
    last_name       = serializers.CharField()
    username        = serializers.CharField()
    email           = serializers.EmailField()
    password        = serializers.CharField() 
    role            = serializers.CharField() 
    picture         = serializers.CharField() 
    
    
    def create (self, validate_data): 
        instance = Usuario()
        instance.first_name       = validate_data.get('first_name')
        instance.last_name      = validate_data.get('last_name')
        instance.username       = validate_data.get('username')
        instance.email          = validate_data.get('email')
        instance.role       = validate_data.get('role')
        instance.picture     = validate_data.get('picture')
        instance.is_staff       = False
        instance.is_active      = True
        instance.is_superuser   = False
        instance.set_password(validate_data.get('password'))    
        instance.save()
        return instance

    #Registro de usuarios
class RegisterPacientesSerializer(serializers.Serializer): 
    id              = serializers.ReadOnlyField()
    first_name      = serializers.CharField()
    last_name       = serializers.CharField()
    username        = serializers.CharField()
    email           = serializers.EmailField()
    password        = serializers.CharField() 
    role            = serializers.CharField() 
    picture         = serializers.CharField() 
    lttd            = serializers.CharField() 
    lngtd         = serializers.CharField() 
    
    
    def create (self, validate_data): 
        instance = Usuario()
        instance.first_name       = validate_data.get('first_name')
        instance.last_name      = validate_data.get('last_name')
        instance.username       = validate_data.get('username')
        instance.email          = validate_data.get('email')
        instance.role       = validate_data.get('role')
        instance.picture     = validate_data.get('picture')
        instance.lttd       = validate_data.get('lttd')
        instance.lngtd     = validate_data.get('lngtd')
        instance.is_staff       = False
        instance.is_active      = True
        instance.is_superuser   = False
        instance.set_password(validate_data.get('password'))    
        instance.save()
        return instance


    def validate_username(self, data):
        print(data)
        users = Usuario.objects.filter(username = data)
        if len (users) != 0:
            raise serializers.ValidationError("Usuario ya existente")
        else: 
            return data 
        
#Login user         
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password= serializers.CharField()
    
    def validate(self, data): 
        user = authenticate(**data)
        if user is not None:
            if user.is_active:
                return user
            else:
                raise serializers.ValidationError("Usuario inactivo")
        return serializers.ValidationError("Datos incorrectos")

class UpdateUserSerializer(serializers.Serializer):
    id              = serializers.ReadOnlyField()
    first_name      = serializers.CharField()
    last_name       = serializers.CharField()
    picture         = serializers.CharField()
    # is_staff        = serializers.BooleanField()
    # is_active       = serializers.BooleanField()
    # is_superuser    = serializers.BooleanField()

    def update(self, instance, validated_data):
        """ Actualizacion de user"""
        instance.first_name     = validated_data.get('first_name', instance.first_name)
        instance.last_name      = validated_data.get('last_name', instance.last_name)
        instance.picture   = validated_data.get('picture', instance.picture)
        instance.save(update_fields=['username', 'first_name', 'last_name', 'picture'])
        return instance                         