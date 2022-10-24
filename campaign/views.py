from django.utils import timezone
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.viewsets import ModelViewSet

from campaign.models import Campaign
from campaign.serializers import CampaignSerializer


class CampaignViewSet(ModelViewSet):
    queryset = Campaign.objects.filter(deleted_at=None)
    serializer_class = CampaignSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)

    filterset_fields = ("status",)
    search_fields = ("name",)

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset
        return self.queryset.filter(created_by=self.request.user)

    def perform_destroy(self, instance):
        instance.deleted_at = timezone.now()
        instance.save()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
