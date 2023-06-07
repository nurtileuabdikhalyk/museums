from . import views

from django.urls import path

urlpatterns = [
    path('', views.index, name='home'),
    path('museum/museum_create/', views.museum_create, name='museum_create'),
    path('museum/exhibition_create/', views.exhibition_create, name='exhibition_create'),
    path('museum/delete/<int:pk>', views.museum_delete, name='museum_delete'),
    path('museum/<slug:slug>/museum_update/', views.MuseumUpdate.as_view(), name='museum_update'),
    path('museum/<slug:slug>/', views.museum_single, name='museum_single'),

    path('exhibits/', views.exponant, name='exhibits'),
    path('exhibits/exponant_create/', views.exponant_create, name='exponant_create'),
    path('exhibits/<slug:slug>/', views.exponant_single, name='exponant_single'),
    path('exhibits/<slug:slug>/exhibits_update/', views.ExponantUpdate.as_view(), name='exhibits_update'),
    path('exhibits/delete/<int:pk>', views.exponant_delete, name='exponant_delete'),

    path('users/', views.usersview, name='users'),
    path('profile/', views.profile, name='profile'),

    path('about/', views.about, name='about'),
    path('search/', views.Search.as_view(), name='search'),
    path('search_exhibits/', views.SearchExhibits.as_view(), name='search_exhibits'),
    path('account/logout/', views.logout, name='account_logout'),
    path('account/signin/', views.signin, name='account_signin'),
    path('account/signup/', views.signup, name='account_signup'),
]
