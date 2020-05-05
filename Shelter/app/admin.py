from django.contrib import admin
from django.contrib.admin import AdminSite
from app.models import Cat, Dog


class CatAdmin(admin.ModelAdmin):
    pass


admin.site.register(Cat, CatAdmin)


class DogAdmin(admin.ModelAdmin):
    pass


admin.site.register(Dog, DogAdmin)


class MyAdminSite(AdminSite):
    site_header = 'administration'


admin_site = MyAdminSite(name='myadmin')
admin_site.register(Dog)
admin_site.register(Cat)
