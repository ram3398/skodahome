from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Customer,Product
import json
from django.forms.models import model_to_dict
from django.core import serializers
# assuming obj is your model instance

# Create your views here.
@csrf_exempt
def form(request):
    if request.method=="POST":
        data=request.POST.dict()
        print(request.POST) 
        print(data)
        firstName=data['firstName']
        lastName=data['lastName']
        companyName=data['companyName']
        address=data['address']
        country=data['country']
        state=data['state']
        email=data['email']
        phone=data['phone']
        notes=data['notes']
        customer=Customer.objects.create(firstName=firstName,lastName=lastName,companyName=companyName,address=address,country=country,state=state,email=email,phone=phone,notes=notes)
        customer.save()
        print(customer.id)
        # product = Product.objects.get(id=productid)
        # order=Order.objects.create(customerid=customer,productid=product)
        return JsonResponse(data)
def products(request):
    data = Product.objects.all().values()
    json_data = json.dumps(list(data))
    return HttpResponse(json_data, content_type='application/json')
def product(request,id):
    data = Product.objects.get(id=id)
    print(data)
    serialized_obj = serializers.serialize('json', [ data, ])
    return HttpResponse(serialized_obj, content_type='application/json')
