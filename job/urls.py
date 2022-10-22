from django.urls import include, path
from rest_framework.routers import DefaultRouter

from job.views import TaskViewSet

router = DefaultRouter()

router.register("tasks", TaskViewSet)

urlpatterns = [
    path("", include(router.urls), name="tasks"),
]
