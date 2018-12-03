from django.db import models


class User(models.Model):
    firstname = models.CharField(max_length=100, blank=False)
    lastname = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=100, blank=False)
    password = models.CharField(max_length=100, blank=False)
    date_updated = models.DateTimeField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email