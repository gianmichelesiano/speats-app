from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'drivers', views.DriverAPIView)

urlpatterns = [
    path('', include(router.urls)),
]