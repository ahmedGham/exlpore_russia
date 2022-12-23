from django.urls import path, include

from universities.api import views

urlpatterns = [
    path('',view=views.allunv,name='unvs'),
    path('form-data/',view=views.formData,name='form-data'),
]
