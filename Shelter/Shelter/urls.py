from django.urls import path
from django.urls import re_path
from django.conf.urls import url
from app import views

urlpatterns = [
    path('', views.home),
    path('home', views.home),
    path('home.html', views.home),
    re_path(r'^home', views.m404),
    path('dog', views.dog),
    path('dog.html', views.dog),
    re_path(r'^dog', views.m404),
    path('cat', views.cat),
    path('cat.html', views.cat),
    re_path(r'^cat', views.m404),
    path('volunteering', views.volunteering),
    path('volunteering.html', views.volunteering),
    re_path(r'^volunteering', views.m404),
    path('help', views.help),
    path('help.html', views.help),
    re_path(r'^help', views.m404),
    path('mail', views.mail),
    path('mail.html', views.mail),
    re_path(r'^mail', views.m404),
]