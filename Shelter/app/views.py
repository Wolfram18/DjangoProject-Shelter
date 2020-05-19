from django.core.mail import send_mail, BadHeaderError, EmailMessage
from django.conf import settings
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


def send(request):
    # if request.is_ajax():
    theme = request.GET.get('theme', 'Fail')
    firstname = request.GET.get('firstname', 'Fail')
    secondname = request.GET.get('secondname', 'Fail')
    phone = request.GET.get('phone', 'Fail')
    from_email = request.GET.get('email', 'Fail')
    message = request.GET.get('message', 'Fail')
    mail = 'Отправитель: ' + secondname + ' ' + firstname + '\n' + 'Телефон:' + phone + '\n' + 'Email: ' + \
           from_email + '\n' + message
    if theme and firstname and secondname and phone and from_email and message:
        send_mail(theme, mail, settings.EMAIL_HOST_USER, ['java.test.mail@yandex.ru'])

        return HttpResponse('Отправлено!')
    else:
        return HttpResponse('Не все данные введены!')
    # return HttpResponse('Отправлено!')
