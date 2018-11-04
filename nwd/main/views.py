from django.shortcuts import render

def all_orgs(request):
    return render(request, 'main/all_orgs.html', {})
# Create your views here.
