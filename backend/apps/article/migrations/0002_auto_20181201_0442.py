# Generated by Django 2.1.2 on 2018-12-01 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='body',
            field=models.TextField(max_length=100),
        ),
    ]
