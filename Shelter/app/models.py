from django.db import models


class Dog(models.Model):
    dog_name = models.CharField(max_length=30)
    dog_race = models.CharField(max_length=40)
    dog_age = models.PositiveIntegerField()
    dog_gender = models.CharField(max_length=1)
    dog_description = models.CharField(max_length=500)
    dog_url = models.URLField(max_length=500)
    dog_image = models.FilePathField(path="static/images/bd_dog")


class Cat(models.Model):
    cat_name = models.CharField(max_length=30)
    cat_race = models.CharField(max_length=40)
    cat_age = models.PositiveIntegerField()
    cat_gender = models.CharField(max_length=1)
    cat_description = models.CharField(max_length=500)
    cat_url = models.URLField(max_length=500)
    cat_image = models.FilePathField(path="static/images/bd_cat")
