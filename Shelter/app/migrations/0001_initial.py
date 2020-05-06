# Generated by Django 3.0.5 on 2020-05-05 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cat_name', models.CharField(max_length=30)),
                ('cat_race', models.CharField(max_length=40)),
                ('cat_age', models.PositiveIntegerField()),
                ('cat_gender', models.CharField(max_length=1)),
                ('cat_description', models.CharField(max_length=500)),
                ('cat_url', models.URLField(max_length=500)),
                ('cat_image', models.FilePathField(path='static/images/bd_cat')),
            ],
        ),
        migrations.CreateModel(
            name='Dog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dog_name', models.CharField(max_length=30)),
                ('dog_race', models.CharField(max_length=40)),
                ('dog_age', models.PositiveIntegerField()),
                ('dog_gender', models.CharField(max_length=1)),
                ('dog_description', models.CharField(max_length=500)),
                ('dog_url', models.URLField(max_length=500)),
                ('dog_image', models.FilePathField(path='static/images/bd_dog')),
            ],
        ),
    ]