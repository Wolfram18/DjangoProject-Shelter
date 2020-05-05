from django.shortcuts import render
from django.http import *


def dog(request):
    return render(request, "dog.html")


def cat(request):
    return render(request, "cat.html")


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