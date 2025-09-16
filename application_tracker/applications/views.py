from django.shortcuts import render, redirect, get_object_or_404
from .models import Application
from .forms import ApplicationForm

def home(request):
    return render(request, 'home.html')

def applications(request):
    applications = Application.objects.filter()
    return render(request, 'applications.html', {"applications": applications})

def create_application(request):
    if request.method == "POST":
        form = ApplicationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("applications")
    else:
        form = ApplicationForm()
    return render(request, "application_form.html", {"form": form})

def delete_application(request, pk):
    app = get_object_or_404(Application, pk=pk)
    if request.method == "POST":
        app.delete()
        return redirect("applications")
    return render(request, "application_confirm_delete.html", {"app": app})