from django.urls import include, path
from rest_framework.routers import DefaultRouter

from visit.views import VisitScheduleViewSet

router = DefaultRouter()

router.register("schedules", VisitScheduleViewSet)

urlpatterns = [
    path("", include(router.urls), name="schedules"),
]
