from django.urls import path
from .views import *
urlpatterns = [
    path('', dashboard, name='dashboard'),
    path('setting/', setting, name='settings'),
    path('transaction/', transaction, name='transaction'),
    path('ad_account/', ad_account, name='ad_account'),

]