# Generated by Django 3.1.1 on 2020-09-07 22:10

import builtins
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('erp', '0002_auto_20200907_1706'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=150, verbose_name='Nombres')),
                ('apellidos', models.CharField(max_length=150, verbose_name='Apellidos')),
                ('nroDocumento', models.CharField(max_length=150, verbose_name='Número del documento')),
                ('celular', models.CharField(max_length=150, verbose_name='Celular')),
                ('genero', models.CharField(max_length=150, verbose_name='Genero')),
                ('especialidad', models.BooleanField(max_length=150, verbose_name='Contagiado')),
            ],
            options={
                'verbose_name': 'Doctor',
                'verbose_name_plural': 'Doctores',
                'db_table': 'doctor',
                'ordering': [builtins.id],
            },
        ),
    ]
