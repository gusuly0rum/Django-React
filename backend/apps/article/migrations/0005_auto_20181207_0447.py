# Generated by Django 2.1.2 on 2018-12-07 04:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0004_auto_20181201_0445'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['date_created']},
        ),
        migrations.AlterField(
            model_name='article',
            name='body',
            field=models.TextField(max_length=100, validators=[django.core.validators.MinLengthValidator(1)]),
        ),
        migrations.AlterField(
            model_name='article',
            name='title',
            field=models.CharField(max_length=100, validators=[django.core.validators.MinLengthValidator(1)]),
        ),
    ]
