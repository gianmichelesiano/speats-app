from django.db import models
from django.contrib.auth.models import User

class  Driver(models.Model):
    name = models.CharField("Name Driver",  max_length=64)
    email = models.EmailField(blank = True, null = True)
    phone = models.CharField(max_length=20, blank = True, null = True)
    address  = models.TextField(blank=True, null=True)
    createdBy = models.ForeignKey(User, related_name='account_created_by', on_delete=models.CASCADE)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)
    isActive = models.BooleanField(default=False)

    def __str__(self):
        return self.name + ' ' +  self.email

