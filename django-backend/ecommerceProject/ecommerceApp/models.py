from django.db import models

# Create your models here.
   
class Product(models.Model):
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    price = models.FloatField()
    inStock = models.BooleanField()
    mainImage = models.ImageField(upload_to='images',null=True)
    image1 = models.ImageField(upload_to='images',null=True)
    image2 = models.ImageField(upload_to='images',null=True)
    image3 = models.ImageField(upload_to='images',null=True)
    
    
    discount = models.FloatField()
class Customer(models.Model):
    firstName=models.CharField(max_length=100)
    lastName=models.CharField(max_length=100)
    companyName=models.CharField(max_length=100,null=True)    
    address=models.TextField()    
    country=models.CharField(max_length=20)
    state=models.CharField(max_length=20)    
    email=models.CharField(max_length=30)
    phone=models.CharField(max_length=15)    
    notes=models.TextField()
