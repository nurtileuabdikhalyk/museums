# Generated by Django 4.1 on 2023-04-10 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_museum_map_alter_museum_image_delete_museumimages'),
    ]

    operations = [
        migrations.AddField(
            model_name='museum',
            name='city',
            field=models.CharField(default=1, max_length=150, verbose_name='Қала'),
            preserve_default=False,
        ),
    ]
