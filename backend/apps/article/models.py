from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator


class Article(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, validators=[MinLengthValidator(1)])
    body = models.TextField(max_length=100, validators=[MinLengthValidator(1)])
    date_updated = models.DateTimeField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['date_created']