from django.contrib import auth
from django.shortcuts import render, get_object_or_404, redirect
from django.utils.text import slugify
from django.views.generic import UpdateView, ListView

from .models import Museum, Users, Exhibits
from .forms import MuseumForm, LoginForm, SignUpForm, MuseumImagesForm, ExhibitsForm


def index(request):
    museums = Museum.objects.order_by('-created')
    context = {
        'title': 'Басты бет',
        'museums': museums
    }

    return render(request, 'mainapp/index.html', context)


# admin
# tomiris
# Tomiris1

def museum_single(request, slug):
    museum = get_object_or_404(Museum, slug=slug)

    context = {
        'title': museum.name,
        'museum': museum
    }

    return render(request, 'mainapp/museum_single.html', context)


def museum_create(request):
    if request.method == 'POST':
        form = MuseumForm(request.POST, request.FILES)
        if form.is_valid():
            form = form.save(commit=False)
            form.slug = slugify(form.name)
            form.save()
            return redirect('home')

    form = MuseumForm()
    context = {
        'title': 'Өңдеу беті',
        'form': form,
    }
    return render(request, 'mainapp/museum_create.html', context)


class MuseumUpdate(UpdateView):
    model = Museum
    form_class = MuseumForm
    template_name = 'mainapp/museum_create.html'
    success_url = '/'


def museum_delete(request, pk):
    question = Museum.objects.get(id=pk)
    question.delete()
    return redirect('home')


def about(request):
    context = {'title': 'Жүйе туралы'}
    return render(request, 'mainapp/about.html', context)


class Search(ListView):
    template_name = 'mainapp/search.html'

    def get_queryset(self):
        return Museum.objects.filter(name__icontains=self.request.GET.get("q"))

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['title'] = 'Іздеу'
        context["q"] = f'q={self.request.GET.get("q")}&'
        return context


class SearchExhibits(ListView):
    template_name = 'mainapp/search_exhibits.html'

    def get_queryset(self):
        return Exhibits.objects.filter(name__icontains=self.request.GET.get("q"))

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['title'] = 'Іздеу'
        context["q"] = f'q={self.request.GET.get("q")}&'
        return context


def logout(request):
    auth.logout(request)
    return redirect('home')


def signin(request):
    messages = ""
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = request.POST['login']
            password = request.POST['password']
            user = auth.authenticate(request, username=username, password=password)
            try:
                auth.login(request, user)
            except:
                context = {'title': 'Кіру', 'form': form, 'messages': 'Логин немесе пароль қате!'}
                return render(request, 'mainapp/signin.html', context)
            return redirect('home')
    else:
        form = LoginForm()
    context = {'title': 'Кіру', 'form': form, 'messages': messages}
    return render(request, 'mainapp/signin.html', context)


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)

        if form.is_valid():
            user = form.save()
            auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            Users.objects.create(user=user,
                                 first_name=form.cleaned_data['first_name'],
                                 last_name=form.cleaned_data['last_name'],
                                 phone=form.cleaned_data['phone'],

                                 )
            return redirect('home')

    else:
        form = SignUpForm()
    context = {'title': 'Тіркелу', 'form': form}
    return render(request, 'mainapp/sign-up.html', context)


def exponant(request):
    exhibits = Exhibits.objects.order_by('museum')
    context = {
        'title': 'Экспонанттар тізімі',
        'exhibits': exhibits,
    }
    return render(request, 'mainapp/exponants.html', context)


def exhibition_create(request):
    if request.method == 'POST':
        form = MuseumImagesForm(request.POST, request.FILES)
        if form.is_valid():
            form = form.save(commit=False)
            form.save()
            return redirect('home')

    form = MuseumImagesForm()
    context = {
        'title': 'Өңдеу беті',
        'form': form,
    }
    return render(request, 'mainapp/exhibition_create.html', context)


def exponant_create(request):
    if request.method == 'POST':
        form = ExhibitsForm(request.POST, request.FILES)
        if form.is_valid():
            form = form.save(commit=False)
            form.slug = slugify(form.name)
            form.save()
            return redirect('exhibits')

    form = ExhibitsForm()
    context = {
        'title': 'Өңдеу беті',
        'form': form,
    }
    return render(request, 'mainapp/exponant_create.html', context)


def exponant_single(request, slug):
    exhibit = get_object_or_404(Exhibits, slug=slug)

    context = {
        'title': exhibit.name,
        'exhibit': exhibit
    }

    return render(request, 'mainapp/exponant_single.html', context)


def exponant_delete(request, pk):
    question = Exhibits.objects.get(id=pk)
    question.delete()
    return redirect('exhibits')


class ExponantUpdate(UpdateView):
    model = Exhibits
    form_class = ExhibitsForm
    template_name = 'mainapp/exponant_create.html'
    success_url = '/exhibits/'


def usersview(request):
    users = Users.objects.filter(admin_status=True)
    context = {
        'title': 'Қызметкерлер',
        'users': users,
    }
    return render(request, 'mainapp/users.html', context)


def profile(request):
    context = {
        'title': 'Профиль',
    }
    return render(request, 'mainapp/profile.html', context)
