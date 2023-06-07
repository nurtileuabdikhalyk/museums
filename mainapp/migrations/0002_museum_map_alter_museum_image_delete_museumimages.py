# Generated by Django 4.1 on 2023-04-09 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='museum',
            name='map',
            field=models.CharField(blank=True, max_length=1500, null=True, verbose_name='Карта(сілтеме)'),
        ),
        migrations.AlterField(
            model_name='museum',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='museum_images/', verbose_name='Сурет'),
        ),
        migrations.DeleteModel(
            name='MuseumImages',
        ),
    ]