from django.db import models
from django.contrib.auth.models import User


class Museum(models.Model):
    name = models.CharField('Мұражай атауы', max_length=150)
    description = models.TextField('Сипаттамасы')
    image = models.FileField('Сурет', upload_to='museum_images/', blank=True, null=True)
    slug = models.SlugField('Слаг')
    created = models.DateTimeField('Құрылған күн', auto_now_add=True)
    city = models.CharField('Қала', max_length=150)
    map = models.CharField('Карта(сілтеме)', max_length=1500, blank=True, null=True)

    def __str__(self):
        return f"{self.name}"

    class Meta:
        verbose_name = 'Мұражай'
        verbose_name_plural = 'Мұражайлар'


class Users(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField('Есімі', max_length=150)
    last_name = models.CharField('Тегі', max_length=150, null=True, blank=True)
    phone = models.CharField('Телефон номері', max_length=150, null=True, blank=True)
    museum = models.ForeignKey(Museum, verbose_name='Жұмыс орны', on_delete=models.CASCADE, blank=True, null=True)
    position = models.CharField('Лауазымы', max_length=250, blank=True, null=True)
    admin_status = models.BooleanField('Админ статусы', default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = 'Жүйе қолданушы'
        verbose_name_plural = 'Жүйе қолданушы'


class MuseumImages(models.Model):
    name = models.CharField('Зал аты', max_length=250)
    image = models.ImageField("Сурет", upload_to="museum_shots/")
    museum = models.ForeignKey(Museum, verbose_name='Мұражай', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.museum.name}"

    class Meta:
        verbose_name = "Көрме залы"
        verbose_name_plural = "Көрме залдары"


class Exhibits(models.Model):
    name = models.CharField('Экспонат аты', max_length=250)
    image = models.ImageField("Сурет", upload_to="exhibits_shots/")
    museum = models.ForeignKey(Museum, verbose_name='Мұражай', on_delete=models.CASCADE)
    description = models.TextField('Сипаттамасы', blank=True, null=True)
    period = models.CharField('Тарихи кезең', max_length=250, blank=True, null=True)
    belongs = models.CharField('Кімге тиесілі', max_length=250, blank=True, null=True)
    slug = models.SlugField('Слаг', blank=True, null=True)

    def __str__(self):
        return f"{self.museum.name}"

    class Meta:
        verbose_name = "Экспонат"
        verbose_name_plural = "Экспонаттар"
