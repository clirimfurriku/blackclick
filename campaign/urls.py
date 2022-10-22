from django.urls import include, path
from rest_framework.routers import DefaultRouter

from campaign.views import CampaignViewSet

router = DefaultRouter()

router.register("campaigns", CampaignViewSet)

urlpatterns = [
    path("", include(router.urls), name="campaigns"),
]
