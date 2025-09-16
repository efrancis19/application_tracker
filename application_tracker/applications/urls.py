from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .api import ApplicationViewSet

router = DefaultRouter()
router.register(r"applications", ApplicationViewSet, basename="application")

urlpatterns = [
    path("", views.home, name="home"),
    path("applications/", views.applications, name="applications"),
    path("applications/new/", views.create_application, name="create_application"),
    path("applications/<int:pk>/delete/", views.delete_application, name="delete_application"),
    path("api/", include(router.urls)),
]