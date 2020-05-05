from django.shortcuts import render
from django.http import *
from app.models import Dog, Cat


def dog(request):
    dog_list = Dog.objects.all().order_by('dog_name')
    return render(request, 'dog.html', {'dog_list': dog_list})


def cat(request):
    cat_list = Cat.objects.all().order_by('cat_name')
    return render(request, 'cat.html', {'cat_list': cat_list})


def help(request):
    return render(request, "help.html")


def home(request):
    return render(request, "home.html")


def mail(request):
    return render(request, "mail.html")


def volunteering(request):
    return render(request, "volunteering.html")


def m404(request):
    return HttpResponseNotFound("<h2>Not Found</h2>")
