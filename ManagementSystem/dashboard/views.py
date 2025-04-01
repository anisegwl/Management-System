from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request, "dashboard.html")

def ad_account(request):
    return render(request, "ad-accounts.html")

def setting(request):
    return render(request, "settings.html")

def transaction(request):
    return render(request, "transaction.html")