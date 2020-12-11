from django.forms import *
from core.usuario.models import Usuario

class UsuarioForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs['autofocus'] = True

    class Meta:
        model = Usuario
        fields = 'first_name', 'last_name', 'username', 'password', 'nmro_unco_idntfccn_tpo_idntfccn', 'nmro_idntfccn', 'tlfno', 'nmro_unco_idntfccn_gnro', 'email', 'groups',
        widgets = {
            'first_name': TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Nombres',
                }
            ),
            'last_name': TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Apellidos',
                }
            ),
            'email': EmailInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Email',
                }
            ),
            'username': TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Usuario',
                }
            ),    
            'password': PasswordInput(render_value=True,
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Password',
                }
            ),     
            'nmro_idntfccn': PasswordInput(render_value=True,
                attrs={                    
                    'class': 'form-control',
                    'placeholder': 'Nro Identificación',
                }
            ),     
            'nmro_unco_idntfccn_tpo_idntfccn': Select(
                attrs={                    
                    'class': 'form-control',                    
                }
            ),     
            'tlfno': TextInput(
                attrs={                    
                    'class': 'form-control',    
                    'placeholder': 'Telefono',                
                }
            ),     
            'nmro_unco_idntfccn_gnro': Select(
                attrs={                    
                    'class': 'form-control',                  
                }
            ),     
            'lngtd': TextInput(
                attrs={                    
                    'class': 'form-control',      
                    'placeholder': 'Longitud',             
                }
            ),     
            'lttd': TextInput(
                attrs={                    
                    'class': 'form-control',  
                    'placeholder': 'Latitud',                 
                }
            ),     
            'groups': SelectMultiple(attrs={                   
                'class': 'form-control',
                'id': 'select2',
                'style': 'width: 100%'                 
            })  
            
        }
        exclude = ['user_permissions', 'last_login', 'date_joined', 'is_staff', 'is_active', 'is_superuser']
        
    # def clean(self):
    #     cleaned = super().clean()
    #     if len(cleaned['nombresasd']) <= 2:
    #         raise forms.ValidationError('Le faltan caracteres en el nombre')
    #         # self.add_error('nombres', 'Le faltan caracteres en el nombre')
    #     return cleaned
    
    # def save(self, commit=True):
    #     data = {}
    #     form = super()
    #     try:
    #         if form.is_valid():
    #             form.save()

    #             pwd = self.cleaned_data['password']
    #             u = form.save(commit=False)
    #             if u.pk is None:
    #                 u.set_password(pwd)
    #             else:
    #                 usuario = Usuario.objects.get(pk=u.pk)                
    #                 if usuario.password != pwd:
    #                     u.set_password(pwd)
    #             usuario.groups.clear()
    #         else:
    #             data['error'] = form.errors
    #     except Exception as e:
    #         data['error'] = str(e)
    #     return data