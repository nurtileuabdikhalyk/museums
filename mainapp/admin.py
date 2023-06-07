from django.contrib import admin
from .models import *


@admin.register(Museum)
class MuseumAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created')
    list_display_links = ('id', 'name')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'admin_status')
    list_display_links = ('id', 'first_name', 'last_name',)
    list_filter = ('admin_status',)
    list_editable = ('admin_status',)


@admin.register(MuseumImages)
class MuseumImagesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'museum')
    list_display_links = ('id', 'name', 'museum')


@admin.register(Exhibits)
class ExhibitsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'museum')
    list_display_links = ('id', 'name', 'museum')
    prepopulated_fields = {'slug': ('name',)}
