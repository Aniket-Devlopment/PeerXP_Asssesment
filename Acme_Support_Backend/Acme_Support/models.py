from django.db import models

class User(models.Model):
    Name = models.CharField(max_length=256)
    Email = models.EmailField()
    Phone_Number = models.IntegerField()
    Password = models.CharField(max_length = 15)
    Department = models.CharField(max_length = 2048)
    Role = models.CharField(max_length = 256)
    Created_By = models.CharField(max_length=256)
    Created_At = models.DateTimeField()
    Updated_At = models.DateTimeField()
    class Meta:
        db_table = "User"

class Department(models.Model):
    Name = models.CharField(max_length=256)
    Description = models.CharField(max_length = 2048)
    Created_By = models.CharField(max_length=256)
    Created_At = models.DateTimeField()
    Updated_At = models.DateTimeField()
    
    class Meta:
        db_table = 'Department'
