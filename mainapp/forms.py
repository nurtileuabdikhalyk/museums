from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .models import Museum, MuseumImages,Exhibits


class MuseumForm(forms.ModelForm):
    class Meta:
        model = Museum
        fields = ('name', 'description', 'map', 'city', 'image')

        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'МҰражай атауы'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'МҰражай сипаттамасы'}),
            'map': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Орналасқан жері'}),
            'city': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'МҰражай орналасқан қала'}),
            'image': forms.FileInput(attrs={'class': 'form-control', 'placeholder': 'МҰражай суреті'}),
        }


class MuseumImagesForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(MuseumImagesForm, self).__init__(*args, **kwargs)
        self.fields['museum'] = forms.ModelChoiceField(
            queryset=Museum.objects.all(), initial=True,
            widget=forms.Select(attrs={"class": "form-control", }))

    class Meta:
        model = MuseumImages
        fields = ('name', 'image', 'museum')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Зал аты'}),
            'image': forms.FileInput(attrs={'class': 'form-control', 'placeholder': 'Зал суреті'}),

        }


class ExhibitsForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(ExhibitsForm, self).__init__(*args, **kwargs)
        self.fields['museum'] = forms.ModelChoiceField(
            queryset=Museum.objects.all(), initial=True,
            widget=forms.Select(attrs={"class": "form-control", }))

    class Meta:
        model = Exhibits
        fields = ('name', 'image', 'museum', 'description', 'period', 'belongs')
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Экспонант аты'}),
            'image': forms.FileInput(attrs={'class': 'form-control', 'placeholder': 'Экспонант суреті'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Экспонант сипаттамасы'}),
            'period': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Тарихи кезең'}),
            'belongs': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Кімге тиесілі'}),

        }


class SignUpForm(UserCreationForm):
    first_name = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Есіміңіз"}))
    last_name = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Тегіңіз"}))
    username = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Логин"}))

    password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "form-control", "placeholder": "Құпия сөз"}))
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={"class": "form-control", "placeholder": "Құпия сөзді қайталаңыз"}))

    phone = forms.CharField(
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "+7 707 000 00 00"}))

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'password1', 'password2', 'phone')


class LoginForm(forms.ModelForm):
    login = forms.CharField(
        widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Логин"}))
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"class": "form-control", "placeholder": "Құпия сөз"}))

    class Meta:
        model = User
        fields = ('login', 'password',)
